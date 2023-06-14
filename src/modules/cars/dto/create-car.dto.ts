import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  km: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  priceFipe: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fuel: string;

  @ApiProperty()
  @IsBoolean()
  isActive?: boolean;
}
