import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddBoadDialogComponent } from '../../components/home/add-boad-dialog/add-boad-dialog.component';
import { ListBoardComponent } from '../../components/home/list-board/list-board.component';
import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListBoardComponent, MatIconModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public boardService: BoardService,
  ) {}

  ngOnInit() {
    this.boardService.fetchBoards();
  }

  openDialog(): void {
    this.dialog.open(AddBoadDialogComponent, {
      width: '250px',
    });
  }
}
