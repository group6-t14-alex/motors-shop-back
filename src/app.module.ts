import { Module } from '@nestjs/common';
import { CarsModule } from './modules/cars/cars.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CarsModule, UserModule],
})
export class AppModule {}
