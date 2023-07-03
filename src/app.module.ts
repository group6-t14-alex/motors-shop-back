import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PhotosModule } from './modules/photos/photos.module';

@Module({
  imports: [CarsModule, UserModule, AuthModule, PhotosModule],
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [CarsModule, UserModule, AuthModule, CommentsModule],
})
export class AppModule {}
