import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ColorService } from 'libs/Color/src/color.service';
import { IconService } from 'libs/Icon/src/icon.service';
import { AuthService } from 'libs/auth/src/auth.service';
import { CatagoriesService } from 'libs/catagories/src/catagories.service';
import { CreateCatagoryDto } from 'libs/common/src/dto/create-catagory.dto';
import { AuthGuard } from 'libs/common/src/guard/auth.guard';
import { UserService } from 'libs/user/src';

@Controller('catagories')
export class CatagoriesController {
  constructor(
    private catagoriesService: CatagoriesService,
    private colorService: ColorService,
    private iconService: IconService,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/')
  @UseGuards(AuthGuard)
  async createCatagory(@Body() body: CreateCatagoryDto, @Req() req) {
    console.log('user in req obj: ', req.user);

    const decodedUser: any = await this.authService.userDecodedFromToken(
      req.user,
    );
    console.log('decodedUser from category-controller: ', decodedUser);

    if (!decodedUser.id) {
      return 'token missing or invalid';
    }

    const color = await this.colorService.findOne(body.colorId);
    const icon = await this.iconService.findOne(body.iconId);
    const user = await this.userService.findOne(decodedUser.id);
    const isEditable = body.isEditable;
    const name = body.name;

    // delete color.createdAt;
    // delete color.updatedAt;
    // delete color.id;

    // delete icon.id;
    // delete icon.createdAt;
    // delete icon.updatedAt;

    // delete user.id;
    // delete user.createdAt;
    // delete user.updatedAt;
    // delete user.password;
    // delete user.tasks;
    // delete user.catagories;

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

  @Get('/mine')
  @UseGuards(AuthGuard)
  async findUserSpecificCategories(@Req() req) {
    console.log('user in req obj: ', req.user);
    const decodedUser: any = await this.authService.userDecodedFromToken(
      req.user,
    );
    delete decodedUser.iat;
    delete decodedUser.exp;
    console.log('decodedUser from user specific category: ', decodedUser);

    if (!decodedUser.id) {
      return 'token missing or invalid';
    }
    return this.catagoriesService.findUserSpecificCategories(decodedUser);
  }
}
