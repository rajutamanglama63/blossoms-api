import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'libs/common/src/dto/create-user.dto';
import { UserService } from 'libs/user/src';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(userDto: CreateUserDto) {
    const users = await this.userService.find(userDto.email);

    if (users.length) {
      throw new BadRequestException('User already exist!');
    }

    const salt = await bcrypt.genSalt(10);

    const hassedPswd = await bcrypt.hash(userDto.password, salt);

    userDto.password = hassedPswd;

    const newUser = await this.userService.create(userDto);

    return newUser;
  }

  async signin(email: string, password: string) {
    let userData: any;

    const [user] = await this.userService.find(email);
    if (!user) {
      throw new NotFoundException('User not found!');
    } else {
      const { password, ...userDataObject } = user;
      userData = userDataObject;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const userDetailsForToken = {
      email: user.email,
      id: user.id,
    };

    const token = jwt.sign(
      userDetailsForToken,
      configService.get('JWT_SECRET'),
      { expiresIn: '1h' },
    );

    return { userData, token };
  }

  async userDecodedFromToken(user) {
    const decodedUser = jwt.verify(user, configService.get('JWT_SECRET'));

    return decodedUser;
  }
}
