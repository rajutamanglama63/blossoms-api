import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'libs/common/dto/create-user.dto';
import { User } from 'libs/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.repo.save(createUserDto);
  }

  async find(email: string) {
    const users = await this.repo.find({
      where: {
        email,
      },
    });

    return users;
  }

  async findOne(id: number) {
    const user = await this.repo.findOne({
      where: {
        id,
      },
    });

    return user;
  }
}
