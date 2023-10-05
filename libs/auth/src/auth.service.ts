import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'libs/common/dto/create-user.dto';
import { UserService } from 'libs/user/src';
import bcrypt from 'bcrypt';

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
}
