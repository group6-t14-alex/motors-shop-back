import { Injectable } from '@nestjs/common';
import { PhotosRepository } from '../photos.repository';
import { PrismaService } from '../../../../database/prisma.service';
import { CreatePhotoDto } from '../../dto/create-photo.dto';
import { Photo } from '../../entities/photo.entity';
import { UpdatePhotoDto } from '../../dto/update-photo.dto';

@Injectable()
export class PhotosPrismaRepository implements PhotosRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePhotoDto, idUser: string): Promise<Photo> {
    const photo = new Photo();
    Object.assign(photo, {
      ...data,
    });

    const newPhoto = await this.prisma.photo.create({
      data: { ...photo, userId: +idUser },
    });

    return newPhoto;
  }

  async findAll(): Promise<Photo[]> {
    const photos = await this.prisma.photo.findMany({
      include: { user: true },
    });
    photos.forEach((photo) => {
      delete photo.user.password;
    });
    return photos;
  }

  async findOne(id: number): Promise<Photo> {
    const photo = await this.prisma.photo.findUnique({
      where: { id },
      include: { user: true },
    });

    delete photo.user.password;
    return photo;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.photo.delete({
      where: { id },
    });
  }

  async update(id: number, data: UpdatePhotoDto): Promise<Photo> {
    const photo = await this.prisma.photo.update({
      where: { id },
      data: { ...data },
      include: { user: true },
    });
    delete photo.user.password;
    return photo;
  }
}
