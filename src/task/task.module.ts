import { Module } from '@nestjs/common';
import { TaskLibModule } from 'libs/task/src/task.module';
import { TaskController } from './task.controller';
import { UserLibModule } from 'libs/user/src';
import { CatagoriesLibModule } from 'libs/catagories/src/catagories.module';

@Module({
  imports: [TaskLibModule, UserLibModule, CatagoriesLibModule],
  controllers: [TaskController],
})
export class TaskModule {}
