import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const logger = new Logger("app");

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    logger: logger,
    transport: Transport.TCP,
    options: {
      port: 4000,
    }
  });

  await app.listen();
}
bootstrap();
