import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IconModule } from './icon/icon.module';
import { ColorModule } from './color/color.module';
import { CatagoriesModule } from './catagories/catagories.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    DatabaseModule,
    UserModule,
    AuthModule,
    IconModule,
    ColorModule,
    CatagoriesModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
