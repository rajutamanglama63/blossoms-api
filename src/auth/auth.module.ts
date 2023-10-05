import { Module } from '@nestjs/common';
import { AuthLibModule } from 'libs/auth/src/auth.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthLibModule],
  controllers: [AuthController],
})
export class AuthModule {}
