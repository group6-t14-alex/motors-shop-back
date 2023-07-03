import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PhotosRepository } from './repositories/photos.repository';
import { UsersRepository } from '../user/repositories/users.repository';

@Injectable()
export class PhotosService {
  constructor(
    private photoRepository: PhotosRepository,
    private userRepository: UsersRepository,
  ) {}
  async create(data: CreatePhotoDto, userId: string) {
    await this.userRepository.verifyTypeUser(+userId);
    const photo = await this.photoRepository.create(data, userId);
    return photo;
  }

  async findAll() {
    const photos = await this.photoRepository.findAll();
    return photos;
  }

  async findOne(id: number) {
    const photo = await this.photoRepository.findOne(id);
    if (!photo) {
      throw new NotFoundException('Photo not found!');
    }
    return photo;
  }

  async update(id: number, data: UpdatePhotoDto, userId: string) {
    await this.findOne(id);
    await this.userRepository.verifyTypeUser(+userId);
    const photo = await this.photoRepository.update(id, data);
    return photo;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.photoRepository.delete(id);
  }
}
