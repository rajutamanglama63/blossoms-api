import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'libs/user/src';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
