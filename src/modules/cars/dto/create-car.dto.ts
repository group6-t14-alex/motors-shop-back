import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  km: number;
  @IsNumber()
  @IsNotEmpty()
  year: number;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  priceFipe: number;
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
  @IsString()
  @IsNotEmpty()
  model: string;
  @IsString()
  @IsNotEmpty()
  color: string;
  @IsString()
  @IsNotEmpty()
  brand: string;
  @IsString()
  @IsNotEmpty()
  fuel: string;
  @IsBoolean()
  isActive?: boolean;
}
