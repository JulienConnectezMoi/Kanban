import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-item-board',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './item-board.component.html',
  styleUrl: './item-board.component.scss'
})
export class ItemBoardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() backgroundImageUrl?: string;

  constructor() {}

  ngOnInit(): void {

  }
}

