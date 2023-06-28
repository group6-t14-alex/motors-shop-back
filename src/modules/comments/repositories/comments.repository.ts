import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

export abstract class CommentRepository {
  abstract create(
    data: CreateCommentDto,
    userId: number,
    carId: number,
  ): Promise<Comment> | Comment;
  abstract findAll(): Promise<Comment[]>;
  abstract findOne(id: number): Promise<Comment>;
  abstract update(id: number, data: UpdateCommentDto): Promise<Comment>;
  abstract delete(id: number): Promise<void>;
  abstract isOwner(id: number, userId: number): Promise<boolean>;
}
