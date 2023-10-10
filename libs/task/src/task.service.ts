import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'libs/common/src/dto/create-task.dto';
import { Task } from 'libs/models/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(newTask: any) {
    return this.repo.save(newTask);
  }
}
