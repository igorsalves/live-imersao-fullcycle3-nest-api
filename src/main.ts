import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './exception-filters/entity-not-found.exception-filter';

const port = process.env.PORT || 3000;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  await app.listen(port, () => {
    logger.log(`Server listening on port ${port}`, 'Bootstrap');
  });
}
bootstrap();
