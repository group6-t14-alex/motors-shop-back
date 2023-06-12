import { hashSync } from 'bcrypt';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserType } from '../enum/typeUser.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  phone: string;

  @IsDate()
  date_of_birth: Date;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  complement: string;

  @IsString()
  @IsNotEmpty()
  type_user: UserType;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
