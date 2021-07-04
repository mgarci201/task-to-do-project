import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { getDbConnectionOptions, runDbMigrations } from '@shared/utils';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
    {
      // logger: Boolean(process.env.ENABLELOGGING),
      logger: console,
    },
  );

  /**
   * Run DB migrations
   */
  await runDbMigrations();
  
  await app.listen(port);

  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
