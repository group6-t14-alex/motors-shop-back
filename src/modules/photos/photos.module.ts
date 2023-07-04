import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../../database/prisma.service';
import { PhotosRepository } from './repositories/photos.repository';
import { PhotosPrismaRepository } from './repositories/prisma/photos-prisma.repository';

@Module({
  imports: [UserModule],
  controllers: [PhotosController],
  providers: [
    PhotosService,
    PrismaService,
    {
      provide: PhotosRepository,
      useClass: PhotosPrismaRepository,
    },
  ],
  exports: [PhotosService],
})
export class PhotosModule {}
