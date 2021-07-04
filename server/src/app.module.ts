import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'tls';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModuleModule } from './todo/todo-module.module';

@Module({})

export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [
        TodoModuleModule,
        TypeOrmModule.forRoot(connOptions)
      ],
      providers: [AppService],
    };
  }
}
