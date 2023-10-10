import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorService } from 'libs/Color/src/color.service';
import { IconService } from 'libs/Icon/src/icon.service';
import { CreateCatagoryDto } from 'libs/common/src/dto/create-catagory.dto';
import { Catagories } from 'libs/models/catagories.entity';
import { UserService } from 'libs/user/src';
import { Repository } from 'typeorm';

@Injectable()
export class CatagoriesService {
  constructor(
    @InjectRepository(Catagories) private repo: Repository<Catagories>,
  ) {}

  async create(newCatagory: any) {
    return this.repo.save(newCatagory);
  }

  async findAll() {
    const catagories = await this.repo.find({
      relations: {
        user: true,
        color: true,
        icon: true,
      },
    });

    return catagories;
  }
}
