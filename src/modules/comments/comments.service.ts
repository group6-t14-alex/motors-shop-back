import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repositories/comments.repository';
import { UsersRepository } from '../user/repositories/users.repository';
import { CarsRepository } from '../cars/repositories/cars.repository';

@Injectable()
export class CommentsService {
  constructor(
    private commentsRepository: CommentRepository,
    private userRepository: UsersRepository,
    private carsRepository: CarsRepository,
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    userId: string,
    carId: string,
  ) {
    await this.userRepository.isAccountOwner(+userId, +userId);
    const car = await this.carsRepository.findOne(+carId);
    const comment = await this.commentsRepository.create(
      createCommentDto,
      +userId,
      car.id,
    );
    return comment;
  }

  async findAll() {
    const comments = await this.commentsRepository.findAll();
    return comments;
  }

  async findOne(id: number) {
    const comment = await this.commentsRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException('Comment not found!');
    }
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto, userId: string) {
    await this.findOne(id);
    await this.userRepository.isAccountOwner(+userId, +userId);
    const isOwner = await this.commentsRepository.isOwner(id, +userId);
    if (!isOwner) {
      throw new UnauthorizedException('You can not update this comment');
    }
    const comment = await this.commentsRepository.update(id, updateCommentDto);
    return comment;
  }

  async remove(id: number, userId: string) {
    await this.findOne(id);
    await this.userRepository.isAccountOwner(+userId, +userId);
    const isOwner = await this.commentsRepository.isOwner(id, +userId);
    if (!isOwner) {
      throw new UnauthorizedException('You can not delete this comment');
    }
    await this.commentsRepository.delete(id);
  }
}
