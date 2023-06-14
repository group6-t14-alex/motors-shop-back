import { CreateCarDto } from '../dto/create-car.dto';
import { Car } from '../entities/car.entity';
import { UpdateCarDto } from '../dto/update-car.dto';

export abstract class CarsRepository {
  abstract create(data: CreateCarDto, userId: string): Promise<Car> | Car;
  abstract findAll(): Promise<Car[]>;
  abstract findOne(id: number): Promise<Car>;
  abstract update(id: number, data: UpdateCarDto): Promise<Car>;
  abstract delete(id: number): Promise<void>;
  abstract isOwner(id: number, userId: number): Promise<boolean>;
}
