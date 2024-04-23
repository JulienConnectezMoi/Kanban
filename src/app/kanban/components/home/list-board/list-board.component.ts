import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../../../../core/class/board.class';
import { ItemBoardComponent } from '../item-board/item-board.component';

@Component({
  selector: 'app-list-board',
  standalone: true,
  imports: [ItemBoardComponent],
  templateUrl: './list-board.component.html',
  styleUrl: './list-board.component.scss'
})
export class ListBoardComponent implements OnInit {
  @Input() public boards?: Board[];
  @Output() boardSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectBoard(boardId: number): void {
    this.boardSelected.emit(boardId);
  }
}
