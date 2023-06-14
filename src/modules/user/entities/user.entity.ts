import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class User {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  date_of_birth: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  complement: string;

  @ApiProperty()
  type_user: string;

  @Exclude()
  password: string;
}
