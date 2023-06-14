import { CarsRepository } from '../cars.repository';
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from '../../dto/create-car.dto';
import { Car } from '../../entities/car.entity';
import { PrismaService } from '../../../../database/prisma.service';
import { UpdateCarDto } from '../../dto/update-car.dto';

@Injectable()
export class CarsPrismaRepository implements CarsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarDto, idUser: string): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...data,
    });

    const newCar = await this.prisma.car.create({
      data: { ...car, userId: +idUser },
    });

    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({ include: { user: true } });
    cars.forEach((car) => {
      delete car.user.password;
    });
    return cars;
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.prisma.car.findUnique({
      where: { id },
      include: { user: true },
    });

    delete car.user.password;
    return car;
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
      include: { user: true },
    });
    delete car.user.password;
    return car;
  }

  async isOwner(id: number, idUser: number): Promise<boolean> {
    const car = await this.prisma.car.findFirst({
      where: { id: id, userId: idUser },
    });
    return !!car;
  }
}
