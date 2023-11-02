import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catagories } from 'libs/models/catagories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatagoriesService {
  constructor(
    @InjectRepository(Catagories) private repo: Repository<Catagories>,
  ) {}

  async create(newCatagory: any) {
    return this.repo.save(newCatagory);
  }

  async findOne(id: number) {
    const catagory = await this.repo.findOne({
      where: {
        id,
      },
    });

    return catagory;
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

  async findUserSpecificCategories(user: any) {
    const catagories = await this.repo.find({
      relations: {
        // user: true,
        color: true,
        icon: true,
      },
      where: {
        user,
      },
    });

    console.log('data: ', catagories);

    return catagories;
  }
}
