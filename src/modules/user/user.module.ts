import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from 'src/utils/mailService';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: 'douglasslycooper@gmail.com',
      },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    MailService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    },
  ],

  exports: [UserService, UsersRepository],
})
export class UserModule {}
