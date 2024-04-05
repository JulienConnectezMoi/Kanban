import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../../../core/models/class/board.class';
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

  constructor() {}

  ngOnInit(): void {}
}
