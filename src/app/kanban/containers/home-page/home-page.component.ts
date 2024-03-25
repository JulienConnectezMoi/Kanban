import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../../components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddBoadDialogComponent } from '../../components/add-boad-dialog/add-boad-dialog.component';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, MatIconModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public boards: any[] = [];

  constructor(public dialog: MatDialog, public localStorageService: LocalStorageService) {
    this.retrieveBoards();
  }

  retrieveBoards(): void {
    this.boards = this.localStorageService.getAll('boards');
  }

  openDialog(): void {
    this.dialog.open(AddBoadDialogComponent, {
      width: '250px',
    });
  }
}
