import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Car } from './entities/car.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @ApiCreatedResponse({ type: Car })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCarDto: CreateCarDto, @Request() req: any) {
    return this.carsService.create(createCarDto, req.user.id);
  }

  @ApiOkResponse({ type: Car, isArray: true })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @ApiOkResponse({ type: Car })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @ApiOkResponse({ type: Car })
  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCarDto: UpdateCarDto,
    @Request() req: any,
  ) {
    return this.carsService.update(parseInt(id), updateCarDto, req.user.id);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Request() req: any) {
    return this.carsService.remove(+id, req.user.id);
  }
}
