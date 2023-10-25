import { Module } from '@nestjs/common';
import { TaskLibModule } from 'libs/task/src/task.module';
import { TaskController } from './task.controller';
import { UserLibModule } from 'libs/user/src';
import { CatagoriesLibModule } from 'libs/catagories/src/catagories.module';
import { AuthLibModule } from 'libs/auth/src/auth.module';

@Module({
  imports: [TaskLibModule, UserLibModule, CatagoriesLibModule, AuthLibModule],
  controllers: [TaskController],
})
export class TaskModule {}
