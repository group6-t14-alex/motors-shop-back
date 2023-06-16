import { ApiProperty } from '@nestjs/swagger';

export class Car {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  km: number;

  @ApiProperty()
  year: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  priceFipe: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  fuel: string;

  @ApiProperty()
  isActive: boolean;
}
