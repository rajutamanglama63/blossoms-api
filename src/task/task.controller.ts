import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from 'libs/auth/src/auth.service';
import { CatagoriesService } from 'libs/catagories/src/catagories.service';
import { CreateTaskDto } from 'libs/common/src/dto/create-task.dto';
import { AuthGuard } from 'libs/common/src/guard/auth.guard';
import { TaskService } from 'libs/task/src/task.service';
import { UserService } from 'libs/user/src';

@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService,
    private catagoriesService: CatagoriesService,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/')
  @UseGuards(AuthGuard)
  async createTask(@Body() body: CreateTaskDto, @Req() req) {
    console.log('user in req obj: ', req.user);
    const decodedUser: any = await this.authService.userDecodedFromToken(
      req.user,
    );
    console.log('decodedUser from controller: ', decodedUser);

    if (!decodedUser.id) {
      return 'token missing or invalid';
    }

    const catagory = await this.catagoriesService.findOne(body.catagoryId);
    const name = body.name;
    const isCompleted = body.isCompleted;
    const user = await this.userService.findOne(decodedUser.id);

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
