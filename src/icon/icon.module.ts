import { Module } from '@nestjs/common';
import { IconLibModule } from 'libs/Icon/src/icons.module';
import { IconController } from './icon.controller';

@Module({
  imports: [IconLibModule],
  controllers: [IconController],
})
export class IconModule {}
