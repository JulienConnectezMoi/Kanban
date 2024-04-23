import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ListTodoComponent } from '../../components/board/list-todo/list-todo.component';
import {Todo} from "../../../core/class/todo.class";
import {TodoService} from "../../../core/services/todo.service";
import {AddTodoDialogComponent} from "../../components/board/add-todo-dialog/add-todo-dialog.component";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [ListTodoComponent, MatIconModule, MatButtonModule],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
})
export class BoardPageComponent implements OnInit {
  public todos!: Todo[];
  public boardId!: number;

  constructor(
    public dialog: MatDialog,
    public todoService: TodoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = +params['id'];
      this.loadTodos();
    });
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodosByBoardId(this.boardId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.addTodo(result.title, result.description, this.boardId);
      this.loadTodos();
    });
  }

  modifyTodo(todo: Todo, withModal = true): void {
    if(withModal) {
      const dialogRef = this.dialog.open(AddTodoDialogComponent, {
        width: '250px',
        data: todo
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.todoService.modifyTodo(todo.id, result.title, result.description, todo.status);
          this.loadTodos();
        }
      });
    } else {
      this.todoService.modifyTodo(todo.id, todo.title, todo.description, todo.status);
      this.loadTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t: Todo) => t.id !== id);
    this.todoService.deleteTodo(id);
  }
}