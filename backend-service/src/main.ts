import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backen service')
    .setDescription('Backend service')
    .setVersion('1.0')
    .addTag('Backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  writeFileSync('openapi3-definition.json', JSON.stringify(document, null, 2));

  await app.listen(3002);
}
bootstrap();
