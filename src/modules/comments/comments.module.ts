import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentRepository } from './repositories/comments.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsPrismaRepository } from './repositories/prisma/comments-prisma.repository';
import { UserModule } from '../user/user.module';
import { CarsModule } from '../cars/cars.module';

@Module({
  imports: [UserModule, CarsModule],
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    {
      provide: CommentRepository,
      useClass: CommentsPrismaRepository,
    },
  ],
  exports: [CommentsService],
})
export class CommentsModule {}
