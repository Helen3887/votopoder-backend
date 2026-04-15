import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- CONFIGURACIÓN DE CORS ---
  // Esto permite que tu Frontend (Vite/React) se comunique con el Backend
  app.enableCors({
    origin: 'http://localhost:5173', // El puerto donde corre tu React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // --- VALIDACIONES GLOBALES ---
  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true, 
      transform: true,
      forbidNonWhitelisted: true, // Esto rebota datos que no estén en tu DTO (Seguridad extra)
    })
  );

  // --- CONFIGURACIÓN DE SWAGGER ---
  const config = new DocumentBuilder()
    .setTitle('VotoPoder PRO API')
    .setDescription('Backend modular para gestión electoral')
    .setVersion('5.5')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // --- INICIO DEL SERVIDOR ---
  await app.listen(3000);
  
  console.log('---');
  console.log(`🚀 Servidor listo en: http://localhost:3000`);
  console.log(`📄 Documentación: http://localhost:3000/api/docs`);
  console.log('---');
}

bootstrap();