import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    logger.log(`Server listening on port ${port}`, 'Bootstrap');
  });
}
bootstrap();
