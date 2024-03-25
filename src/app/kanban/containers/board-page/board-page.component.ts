import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTodoDialogComponent } from '../../components/add-todo-dialog/add-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CardComponent, MatIconModule, MatButtonModule],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
})
export class BoardPageComponent {
  public todos: any[] = [];

  constructor(public dialog: MatDialog, public localStorageService: LocalStorageService) {
    this.retrieveTodos();
  }

  public titlesColumns: any[] = [
    {
      id: 1,
      title: "TODO",
    },
    {
      id: 2,
      title: "StandBy",
    },
    {
      id: 3,
      title: "In Progress",
    },
    {
      id: 4,
      title: "Blocked",
    },
    {
      id: 5,
      title: "Close",
    },
  ];

  retrieveTodos(): void {
    // Utilisez le service LocalStorageService pour récupérer les todos
    this.todos = this.localStorageService.getAll('todos');
  }

  openDialog(): void {
    this.dialog.open(AddTodoDialogComponent, {
      width: '250px',
    });
  }
}
