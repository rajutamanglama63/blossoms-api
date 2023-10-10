import { Module } from '@nestjs/common';
import { TaskLibModule } from 'libs/task/src/task.module';
import { TaskController } from './task.controller';

@Module({
  imports: [TaskLibModule],
  controllers: [TaskController],
})
export class TaskModule {}
