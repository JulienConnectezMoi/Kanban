import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [CardComponent, CdkDropList, CdkDrag],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss'
})
export class ListTodoComponent {
  taskLists: any[] = [];

  constructor(public localStorageService: LocalStorageService) {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.taskLists = [
      { id: 'todo', title: 'To Do', tasks: this.localStorageService.getAll('todos') },
      { id: 'standby', title: 'StandBy', tasks: this.localStorageService.getAll('standby') },
      { id: 'progress', title: 'In Progress', tasks: this.localStorageService.getAll('progress') },
      { id: 'blocked', title: 'Blocked', tasks: this.localStorageService.getAll('blocked') },
      { id: 'close', title: 'Close', tasks: this.localStorageService.getAll('close') }
    ];
  }

  drop(event: CdkDragDrop<string[]>, targetList: any[]) {
    if (event.previousContainer === event.container) {
      moveItemInArray(targetList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        targetList,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
