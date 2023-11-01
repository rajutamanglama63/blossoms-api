import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateColorDto } from 'libs/common/src/dto/create-color.dto';
import { Color } from 'libs/models/color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService {
  constructor(@InjectRepository(Color) private repo: Repository<Color>) {}

  create(createColorDto: CreateColorDto) {
    return this.repo.save(createColorDto);
  }

  async findOne(id: number) {
    const color = await this.repo.findOne({
      where: {
        id,
      },
    });

    return color;
  }

  async findColors() {
    return await this.repo.find();
  }
}
