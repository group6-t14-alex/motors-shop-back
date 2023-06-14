import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CarsService } from '../cars/cars.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private carsService: CarsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const passwordMatch = await compare(password, user.password);
      if (passwordMatch) {
        return { email: user.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: String(user.id) }),
    };
  }
}
