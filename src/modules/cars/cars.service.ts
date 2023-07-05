import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './repositories/cars.repository';
import { UsersRepository } from '../user/repositories/users.repository';
import { PhotosRepository } from '../photos/repositories/photos.repository';

@Injectable()
export class CarsService {
  constructor(
    private carsRepository: CarsRepository,
    private userRepository: UsersRepository,
    private photosRepository: PhotosRepository,
  ) {}

  async create(data: CreateCarDto, userId: string) {
    console.log(data);
    await this.userRepository.verifyTypeUser(+userId);
    const galleryArr = data.gallery;
    const car = await this.carsRepository.create(data, userId);
    const carId = car.id;
    galleryArr.map(async (item: any) => {
      await this.photosRepository.create(item.url, carId.toString());
    });
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

  async update(id: number, data: UpdateCarDto, userId: string) {
    await this.findOne(id);
    await this.userRepository.verifyTypeUser(+userId);
    const isOwner = await this.carsRepository.isOwner(id, +userId);
    if (!isOwner) {
      throw new UnauthorizedException('You can not update this ad');
    }
    const car = await this.carsRepository.update(id, data);
    return car;
  }

  async remove(id: number, userId: string) {
    await this.findOne(id);
    await this.userRepository.verifyTypeUser(+userId);
    const isOwner = await this.carsRepository.isOwner(id, +userId);
    if (!isOwner) {
      throw new UnauthorizedException('You can not delete this ad');
    }
    await this.carsRepository.delete(id);
  }
}
