import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service';
import { CommentRepository } from '../comments.repository';
import { Comment } from '../../entities/comment.entity';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentsPrismaRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateCommentDto,
    idUser: number,
    idCar: number,
  ): Promise<Comment> {
    const comment = new Comment();
    Object.assign(comment, {
      ...data,
    });

    const newComment = await this.prisma.comments.create({
      data: { ...comment, userId: idUser, carId: idCar },
    });

    return newComment;
  }

  async findAll(): Promise<Comment[]> {
    const comments = await this.prisma.comments.findMany({
      include: { user: true, car: true },
    });
    comments.forEach((comment) => {
      delete comment.user.password;
    });
    return plainToInstance(Comment, comments);
  }

  async findOne(id: number): Promise<Comment> {
    const comment = await this.prisma.comments.findUnique({
      where: { id },
      include: { user: true, car: true },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found!');
    }
    delete comment.user.password;

    return plainToInstance(Comment, comment);
  }

  async delete(id: number): Promise<void> {
    const comment = await this.prisma.comments.delete({
      where: { id },
    });

    if (!comment) {
      console.log('Comment not found');
    }
  }

  async update(id: number, data: UpdateCommentDto): Promise<Comment> {
    const comment = await this.prisma.comments.update({
      where: { id },
      data: { ...data },
      include: { user: true, car: true },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found!');
    }
    delete comment.user.password;
    return plainToInstance(Comment, comment);
  }

  async isOwner(id: number, idUser: number): Promise<boolean> {
    const comment = await this.prisma.comments.findFirst({
      where: { id: id, userId: idUser },
    });
    return !!comment;
  }
}
