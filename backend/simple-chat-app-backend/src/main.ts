import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Simple Chat App API')
        .setDescription('API для чата.')
        .setVersion('1.0.0')
        .addTag('nikitandro')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    await app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}

start();
