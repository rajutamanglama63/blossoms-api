import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from 'libs/common/src/dto/create-task.dto';
import { TaskService } from 'libs/task/src/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('/')
  async createTask(@Body() body: CreateTaskDto) {
    const task = await this.taskService.create(body);

    return task;
  }
}
