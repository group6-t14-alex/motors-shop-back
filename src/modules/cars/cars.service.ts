import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';

@Injectable()
export class CarsService {
  constructor(private carsRepository: CarsRepository) {}
  async create(data: CreateCarDto) {
    const car = await this.carsRepository.create(data);
    return car;
  }

  async findAll() {
    const cars = await this.carsRepository.findAll();
    return cars;
  }

  async findOne(id: number) {
    const car = await this.carsRepository.findOne(id);
    if (!car) {
      throw new NotFoundException('Car not found!');
    }
    return car;
  }

  async update(id: number, data: UpdateCarDto) {
    await this.findOne(id);
    const car = await this.carsRepository.update(id, data);
    return car;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.carsRepository.delete(id);
  }
}
