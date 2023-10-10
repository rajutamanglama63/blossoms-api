import { Body, Controller, Post } from '@nestjs/common';
import { ColorService } from 'libs/Color/src/color.service';
import { CreateColorDto } from 'libs/common/src/dto/create-color.dto';

@Controller('color')
export class ColorController {
  constructor(private colorService: ColorService) {}

  @Post('/')
  async createColor(@Body() body: CreateColorDto) {
    const color = await this.colorService.create(body);

    return color;
  }
}
