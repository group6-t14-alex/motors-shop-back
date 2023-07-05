import { Module, forwardRef } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
// import { UserModule } from '../user/user.module';
import { PrismaService } from '../../database/prisma.service';
import { PhotosRepository } from './repositories/photos.repository';
import { PhotosPrismaRepository } from './repositories/prisma/photos-prisma.repository';
import { CarsModule } from '../cars/cars.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [forwardRef(() => CarsModule), UserModule],
  controllers: [PhotosController],
  providers: [
    PhotosService,
    PrismaService,
    {
      provide: PhotosRepository,
      useClass: PhotosPrismaRepository,
    },
  ],
  exports: [PhotosService, PhotosRepository],
})
export class PhotosModule {}
