import { NestFactory } from '@nestjs/core';
import AppModule from '@modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Compassolisa API')
    .setDescription('API de gestão de locadoras da Compassolisa')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs-api', app, document);

  await app.listen(3000);
}
bootstrap();
