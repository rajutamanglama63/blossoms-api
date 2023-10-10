import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColorService } from 'libs/Color/src/color.service';
import { IconService } from 'libs/Icon/src/icon.service';
import { CatagoriesService } from 'libs/catagories/src/catagories.service';
import { CreateCatagoryDto } from 'libs/common/src/dto/create-catagory.dto';
import { UserService } from 'libs/user/src';

@Controller('catagories')
export class CatagoriesController {
  constructor(
    private catagoriesService: CatagoriesService,
    private colorService: ColorService,
    private iconService: IconService,
    private userService: UserService,
  ) {}

  @Post('/')
  async createCatagory(@Body() body: CreateCatagoryDto) {
    const color = await this.colorService.findOne(body.colorId);
    const icon = await this.iconService.findOne(body.iconId);
    const user = await this.userService.findOne(body.userId);
    const isEditable = body.isEditable;
    const name = body.name;

    const newCatagory = {
      color,
      icon,
      isEditable,
      name,
      user,
    };

    const catagory = await this.catagoriesService.create(newCatagory);

    return catagory;
  }

  @Get()
  findAll() {
    return this.catagoriesService.findAll();
  }
}
