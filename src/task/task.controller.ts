import { Body, Controller, Post } from '@nestjs/common';
import { CatagoriesService } from 'libs/catagories/src/catagories.service';
import { CreateTaskDto } from 'libs/common/src/dto/create-task.dto';
import { TaskService } from 'libs/task/src/task.service';
import { UserService } from 'libs/user/src';

@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService,
    private catagoriesService: CatagoriesService,
    private userService: UserService,
  ) {}

  @Post('/')
  async createTask(@Body() body: CreateTaskDto) {
    const catagory = await this.catagoriesService.findOne(body.catagoryId);
    const name = body.name;
    const isCompleted = body.isCompleted;
    const user = await this.userService.findOne(body.userId);

    const newTask = {
      catagory,
      name,
      isCompleted,
      user,
    };
    const task = await this.taskService.create(newTask);

    return task;
  }
}
