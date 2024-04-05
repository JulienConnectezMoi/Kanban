import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Board } from '../../../../core/models/class/board.class';

@Component({
  selector: 'app-item-board',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './item-board.component.html',
  styleUrl: './item-board.component.scss'
})
export class ItemBoardComponent implements OnInit {
  @Input() public board!: Board;

  constructor() {}

  ngOnInit(): void {

  }
}

