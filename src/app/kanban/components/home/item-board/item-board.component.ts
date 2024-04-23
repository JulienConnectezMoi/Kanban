import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Board } from '../../../../core/class/board.class';

@Component({
  selector: 'app-item-board',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './item-board.component.html',
  styleUrl: './item-board.component.scss'
})
export class ItemBoardComponent implements OnInit {
  @Input() public board!: Board;
  @Output() boardSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectBoard(boardId: number): void {
    this.boardSelected.emit(boardId);
  }
}