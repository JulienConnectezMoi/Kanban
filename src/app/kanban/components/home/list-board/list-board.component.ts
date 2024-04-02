import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../board/card/card.component';
import { LocalStorageService } from '../../../../core/services/local-storage.service';

@Component({
  selector: 'app-list-board',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-board.component.html',
  styleUrl: './list-board.component.scss'
})
export class ListBoardComponent implements OnInit {
  public boards: any[] = [];

  constructor(public localStorageService: LocalStorageService) {
    this.retrieveBoards();
  }

  ngOnInit(): void {

  }

  retrieveBoards(): void {
    this.boards = this.localStorageService.getAll('boards');
  }
}
