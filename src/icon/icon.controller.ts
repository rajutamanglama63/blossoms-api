import { Body, Controller, Post } from '@nestjs/common';
import { IconService } from 'libs/Icon/src/icon.service';
import { CreateIconDto } from 'libs/common/src/dto/create-icon.dto';

@Controller('icon')
export class IconController {
  constructor(private iconService: IconService) {}

  @Post('/')
  async createIcon(@Body() body: CreateIconDto) {
    const icon = await this.iconService.create(body);

    return icon;
  }
}
