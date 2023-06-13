import { Exclude } from 'class-transformer';

export class User {
  readonly id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string;
  cep: string;
  number: string;
  complement: string;
  type_user: string;

  @Exclude()
  password: string;
}
