import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddBoadDialogComponent } from '../../components/home/add-boad-dialog/add-boad-dialog.component';
import { ListBoardComponent } from '../../components/home/list-board/list-board.component';
import { BoardService } from '../../../core/services/board.service';
import { Board } from '../../../core/class/board.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListBoardComponent, MatIconModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public boards!: Board[];

  constructor(
    public dialog: MatDialog,
    public boardService: BoardService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.boards = this.boardService.getAllBoards();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBoadDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.boardService.addBoard(result.title, result.description, result.url);
      this.boards = this.boardService.getAllBoards();
    });
  }

  openKanban(selectedBoardId: number): void {
    this.router.navigateByUrl(`/board/${selectedBoardId}`);
  }
}
