import { Module } from '@nestjs/common';
import { CatagoriesLibModule } from 'libs/catagories/src/catagories.module';
import { CatagoriesController } from './catagories.controller';
import { ColorLibModule } from 'libs/Color/src/color.module';
import { IconLibModule } from 'libs/Icon/src/icons.module';
import { UserLibModule } from 'libs/user/src';

@Module({
  imports: [CatagoriesLibModule, ColorLibModule, IconLibModule, UserLibModule],
  controllers: [CatagoriesController],
})
export class CatagoriesModule {}
