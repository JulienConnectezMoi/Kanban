import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from "@angular/material/card";
import { Todo } from "../../../../core/class/todo.class";
import { MatButtonModule } from '@angular/material/button';
import { TagCouleurComponent } from "../../tag-couleur/tag-couleur.component";


@Component({
    selector: 'app-item-todo',
    standalone: true,
    templateUrl: './item-todo.component.html',
    styleUrl: './item-todo.component.scss',
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardActions,
        MatButtonModule,
        TagCouleurComponent
    ]
})
export class ItemTodoComponent implements OnInit {
  @Input() public todo!: Todo;

  @Output() onModify = new EventEmitter<Todo>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }
}
