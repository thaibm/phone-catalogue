import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiVersion = process.env.API_VERSION;
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(`api/${apiVersion}`);

  const config = new DocumentBuilder()
    .setTitle('Phones Catalogue')
    .setDescription('Phones catalogue code challenge')
    .setVersion('1.0')
    .addTag('phones')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api/${apiVersion}/swagger`, app, document);
  const port = parseInt(process.env.PORT, 10) || 3001;
  await app.listen(port);
}

bootstrap();
