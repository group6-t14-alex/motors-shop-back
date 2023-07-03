import { CreatePhotoDto } from '../dto/create-photo.dto';
import { UpdatePhotoDto } from '../dto/update-photo.dto';
import { Photo } from '../entities/photo.entity';

export abstract class PhotosRepository {
  abstract create(data: CreatePhotoDto, userId: string): Promise<Photo> | Photo;
  abstract findAll(): Promise<Photo[]>;
  abstract findOne(id: number): Promise<Photo>;
  abstract update(id: number, data: UpdatePhotoDto): Promise<Photo>;
  abstract delete(id: number): Promise<void>;
}
