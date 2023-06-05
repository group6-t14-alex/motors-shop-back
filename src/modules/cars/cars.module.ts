import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { PrismaService } from '../../database/prisma.service';
import { CarsRepository } from './repositories/cars.repository';
import { CarsPrismaRepository } from './repositories/prisma/cars-prisma.repository';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    PrismaService,
    {
      provide: CarsRepository,
      useClass: CarsPrismaRepository,
    },
  ],
})
export class CarsModule {}
