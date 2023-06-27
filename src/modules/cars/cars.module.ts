import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from '../../database/prisma.service';
import { CarsRepository } from './repositories/cars.repository';
import { CarsPrismaRepository } from './repositories/prisma/cars-prisma.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [CarsController],
  providers: [
    CarsService,
    PrismaService,
    {
      provide: CarsRepository,
      useClass: CarsPrismaRepository,
    },
  ],

  exports: [CarsService, CarsRepository],
})
export class CarsModule {}
