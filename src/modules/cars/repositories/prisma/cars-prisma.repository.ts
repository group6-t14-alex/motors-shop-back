import { CarsRepository } from '../cars.repository';
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { PrismaService } from '../../../../database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { UpdateCarDto } from '../../dto/update-car.dto';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCarDto): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data,
    });

    const newCar = await this.prisma.car.create({
      data: { ...car },
    });

    return plainToInstance(Car, newCar);
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany();
    return plainToInstance(Car, cars);
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.prisma.car.findUnique({
      where: { id },
    });
    return plainToInstance(Car, car);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.car.delete({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCarDto): Promise<Car> {
    const car = await this.prisma.car.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Car, car);
  }
}
