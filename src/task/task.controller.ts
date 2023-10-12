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

    delete user.password;
    delete user.catagories;
    delete user.tasks;
    delete user.id;
    delete user.createdAt;
    delete user.updatedAt;

    delete catagory.id;
    delete catagory.createdAt;
    delete catagory.updatedAt;
    delete catagory.color;
    delete catagory.icon;
    delete catagory.user;
    delete catagory.isEditable;

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
