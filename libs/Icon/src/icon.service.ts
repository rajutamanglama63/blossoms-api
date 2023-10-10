import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIconDto } from 'libs/common/src/dto/create-icon.dto';
import { Icon } from 'libs/models/icon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IconService {
  constructor(@InjectRepository(Icon) private repo: Repository<Icon>) {}

  create(createIconDto: CreateIconDto) {
    return this.repo.save(createIconDto);
  }

  async findOne(id: number) {
    const icon = await this.repo.findOne({
      where: {
        id,
      },
    });

    return icon;
  }
}
