import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: { groups: ['transform'] },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Motors Shop')
    .setDescription(
      'A API de Motors Show é um serviço de anúncio de carros em um site, desenvolvida usando NestJS, Prisma e Swagger.' +
        ' A documentação Swagger detalha os endpoints para listar, criar, atualizar e excluir carros anunciados.' +
        ' Ela fornece exemplos, parâmetros e respostas esperadas. A autenticação e autorização também são abordadas.' +
        ' A documentação é uma referência completa para integrar a API de Motors Show em aplicações.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
