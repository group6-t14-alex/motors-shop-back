import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from '../../dto/update-user.dto';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });

    const newUser = await this.prisma.user.create({
      data: { ...user },
      include: { car: true },
    });

    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    const users = [await this.prisma.user.findMany({ include: { car: true } })];
    return plainToInstance(User, users);
  }
  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        car: true,
      },
    });
    return plainToInstance(User, user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
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
}
