import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, '0.0.0.0');
  Logger.log(`Application starting in 0.0.0.0:${port}`);
}
bootstrap();
