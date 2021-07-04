import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoCreateDto } from './dto/todo.create.dto';
import { TodoDto } from './dto/todo.dto';
// import { TodoEntity } from '@todo/entity/todo.entity';
import { toPromise } from '../shared/utils';
import { toTodoDto } from '../shared/mapper';
import { todos } from 'src/mock/todos.mock';
import { TodoEntity } from '@todo/entity/todo.entity';

@Injectable()
export class TodoService {
    getAllTodo() {
        throw new Error('Method not implemented.');
    }
    updateTodo(todoDto: TodoDto): TodoDto | PromiseLike<TodoDto> {
        throw new Error('Method not implemented.');
    }
    destroyTodo(id: string): TodoDto | PromiseLike<TodoDto> {
        throw new Error('Method not implemented.');
    }
    todos: TodoEntity[] = todos;

    async getOneTodo(id: string): Promise<TodoDto> {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new HttpException(`Todo item doesnt exist`, HttpStatus.BAD_REQUEST);
        }

        return toPromise(toTodoDto(todo));
    }

    async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
        const {name, description} = todoDto;
        const todo: TodoEntity = {
            id: uuid(),
            name,
            description
        };

        this.todos.push(todo);
        return toPromise(toTodoDto(todo));
    }

}
function uuid(): string {
    throw new Error('Function not implemented.');
}

