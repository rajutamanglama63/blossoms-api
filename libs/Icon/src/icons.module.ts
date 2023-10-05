import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Icon } from 'libs/models/icon.entity';
import { IconService } from './icon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Icon])],
  providers: [IconService],
  exports: [IconService],
})
export class IconLibModule {}
