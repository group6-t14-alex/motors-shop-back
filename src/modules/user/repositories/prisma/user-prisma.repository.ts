import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findUserByCPF(cpf: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { cpf } });
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });

    const newUser = await this.prisma.user.create({
      data: { ...user },
      include: { car: true, comments: true },
    });

    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({ include: { car: true } });
    return plainToInstance(User, users);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: {
        car: true,
        comments: true,
      },
    });
    // console.log(user);
    //Esta requisição esta disparando a todo momento.
    if (!user) {
      console.log('User not found');
    }

    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findByToken(token: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { reset_token: token },
    });
    return user;
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(User, user);
  }
  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async isAccountOwner(id: number, userId: number): Promise<boolean> {
    const user = await this.prisma.user.findFirst({ where: { id: id } });

    if (user.id !== userId) {
      throw new NotFoundException('You do not have permission');
    }

    return true;
  }

  async verifyTypeUser(userId: number): Promise<boolean> {
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    if (user.type_user !== 'anunciante') {
      throw new UnauthorizedException('You can not create or update cars ads');
    }
    return true;
  }

  async updateToken(email: string, resetToken: string): Promise<void> {
    await this.prisma.user.update({
      where: { email },
      data: { reset_token: resetToken },
    });
  }

  async updatePassword(id: number, password: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: {
        password: hashSync(password, 10),
        reset_token: null,
      },
    });
  }
}
