import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors());

  const port = process.env.PORT ? Number(process.env.PORT) : 4000;

  await app.listen(port);
  Logger.log(`Application started on port: ${port}`);
}
bootstrap();
