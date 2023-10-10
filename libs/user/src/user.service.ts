import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'libs/common/src/dto/create-user.dto';
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
      relations: {
        catagories: true,
        tasks: true,
      },
    });

    return user;
  }

  async findAll() {
    const users = await this.repo.find({
      relations: {
        catagories: true,
        tasks: true,
      },
    });

    // return users;

    if (users) {
      // Create an array of user details without the password field
      const usersWithoutPassword = users.map(
        ({ password, ...userDetails }) => userDetails,
      );
      return usersWithoutPassword;
    }

    return [];
  }
}
