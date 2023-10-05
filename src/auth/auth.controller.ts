import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'libs/auth/src/auth.service';
import { CreateUserDto } from 'libs/common/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() body: CreateUserDto) {
    const user = await this.authService.signup(body);

    return user;
  }
}
