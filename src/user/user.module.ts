import { Module } from '@nestjs/common';
import { UserLibModule } from 'libs/user/src';
import { UserController } from './user.controller';

@Module({
  imports: [UserLibModule],
  controllers: [UserController],
})
export class UserModule {}
