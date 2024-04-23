import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  CdkDragDrop,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ItemTodoComponent } from '../item-todo/ItemTodoComponent';
import { Todo } from '../../../../core/class/todo.class';
import { ActivatedRoute } from '@angular/router';

// Enum pour représenter les états des tâches
export enum TaskStatus {
  TODO = "todo",
  PROGRESS = "progress",
  STANDBY = "standby",
  BLOCKED = "blocked",
  CLOSE = "close"
}

interface IUpdateTodoEvent {
  todo: Todo;
  withModal: boolean;
}

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [CdkDropList, CdkDrag, ItemTodoComponent],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss'
})
export class ListTodoComponent implements OnInit, OnChanges {
  @Input() public todos!: Todo[];

  @Output() onModify = new EventEmitter<IUpdateTodoEvent>();
  @Output() onDelete = new EventEmitter<number>();

  todo: Todo[] = [];
  progress: Todo[] = [];
  standby: Todo[] = [];
  blocked: Todo[] = [];
  close: Todo[] = [];
  boardId!: number;

  public readonly taskStatutEnum = TaskStatus;

  constructor(private route: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges): void {
    const todos = changes?.['todos']?.currentValue as Todo[]
    if(todos) {
      this.todo = todos.filter(t => t.status === TaskStatus.TODO)
      this.progress = todos.filter(t => t.status === TaskStatus.PROGRESS)
      this.standby = todos.filter(t => t.status === TaskStatus.STANDBY)
      this.blocked = todos.filter(t => t.status === TaskStatus.BLOCKED)
      this.close = todos.filter(t => t.status === TaskStatus.CLOSE)
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = +params['id'];
      this.filterTodosByBoardId();
    });

    this.todo = this.todos.filter(t => t.status === TaskStatus.TODO)
    this.progress = this.todos.filter(t => t.status === TaskStatus.PROGRESS)
    this.standby = this.todos.filter(t => t.status === TaskStatus.STANDBY)
    this.blocked = this.todos.filter(t => t.status === TaskStatus.BLOCKED)
    this.close = this.todos.filter(t => t.status === TaskStatus.CLOSE)
  }

  filterTodosByBoardId(): void {
    if (this.todos && this.boardId) {
      this.todo = this.todos.filter(todo => todo.id_parent === this.boardId);
    }
  }

  drop(event: CdkDragDrop<Todo[]>, status: TaskStatus) {
    if (event.previousContainer !== event.container) {
      const item = event.item.data;
      item.status = status;
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.onModify.emit({todo: item, withModal: false})
    }
  }
}
