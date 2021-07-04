import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TaskEntity } from '@todo/entity/task.entity';
import { UserEntity } from '@user/entity/user.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
    imports:
    [TypeOrmModule.forFeature([TodoEntity, TaskEntity, UserEntity])],
    controllers: [TodoController, TaskController],
    providers: [TodoService, TaskService],
})
export class TodoModuleModule {}
