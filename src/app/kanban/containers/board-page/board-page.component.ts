import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTodoDialogComponent } from '../../components/board/add-todo-dialog/add-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ListTodoComponent } from '../../components/board/list-todo/list-todo.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [ListTodoComponent, MatIconModule, MatButtonModule],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
})
export class BoardPageComponent implements OnInit {
  public todos: any[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openDialog(): void {
    this.dialog.open(AddTodoDialogComponent, {
      width: '250px',
    });
  }
}
