import { randomUUID } from 'node:crypto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { MailService } from 'src/utils/mailService';

@Injectable()
export class UserService {
  constructor(
    private usersRepository: UsersRepository,
    private mailService: MailService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (findUser) {
      throw new ConflictException('User already exists');
    }
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto, userId: string) {
    const userFound = await this.usersRepository.findOne(id);
    if (!userFound) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepository.isAccountOwner(id, +userId);

    if (updateUserDto.email) {
      const findUser = await this.usersRepository.findByEmail(
        updateUserDto.email,
      );

      if (findUser && findUser.id !== id) {
        throw new ConflictException('Email already exist');
      }
    }
    const user = await this.usersRepository.update(id, updateUserDto);
    return user;
  }

  async remove(id: number, userId: string) {
    const userFound = await this.usersRepository.findOne(id);
    if (!userFound) {
      throw new NotFoundException('User not found');
    }
    await this.usersRepository.isAccountOwner(id, +userId);
    await this.usersRepository.delete(id);
    return;
  }

  async sendEmailResetPassword(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const resetToken = randomUUID();

    await this.usersRepository.updateToken(email, resetToken);

    const resetPasswordTemplate = this.mailService.resetPasswordtemplate(
      email,
      user.name,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, reset_token: string) {
    const user = await this.usersRepository.findByToken(reset_token);
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found !');
    }

    await this.usersRepository.updatePassword(user.id, password);
  }
}
