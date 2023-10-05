import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatagoriesService } from './catagories.service';
import { Catagories } from 'libs/models/catagories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catagories])],
  providers: [CatagoriesService],
  exports: [CatagoriesService],
})
export class CatagoriesLibModule {}
