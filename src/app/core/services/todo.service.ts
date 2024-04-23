import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../class/todo.class';

@Injectable({
    providedIn: 'root',
})
export class TodoService {

    constructor(private localStorageService: LocalStorageService) {}

    getAllTodos(): any[] {
        return this.localStorageService.getAll('todos') || [];
    }

    addTodo(title: string, description: string, boardId: number): void {
        const todo = Todo.init(title, description, boardId);
        this.localStorageService.setOne('todos', todo);
      }

    modifyTodo(id: number, title: string, description: string, status: string): void {
        const todos = this.localStorageService.getAll('todos') || [];
        const updatedTodo = todos.find((todo: Todo) => todo.id === id);
        if (updatedTodo) {
            updatedTodo.title = title;
            updatedTodo.description = description;
            updatedTodo.status = status;
            this.localStorageService.update('todos', updatedTodo);
        }
    }

    deleteTodo(id: number): void {
        this.localStorageService.deleteOne('todos', id);
    }

    getTodosByBoardId(boardId: number): Todo[] {
        const todos = this.localStorageService.getAll('todos') || [];
        return todos.filter(todo => todo.id_parent === boardId);
    }
}