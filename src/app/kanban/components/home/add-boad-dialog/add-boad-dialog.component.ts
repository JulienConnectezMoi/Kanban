import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as uuid from 'uuid';
import { BoardService } from '../../../../core/services/board.service';

@Component({
  selector: 'app-add-boad-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-boad-dialog.component.html',
  styleUrl: './add-boad-dialog.component.scss'
})
export class AddBoadDialogComponent {
  @Input() boards: any[] = [];

  public boardForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    url: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<AddBoadDialogComponent>,
    private boardService: BoardService,
  ) {}

  public onSaveClick(): void {
    const user_id = localStorage.getItem('currentUser');
    let userEmail: string | null = null;

    if (user_id) {
      // recuperer "user" sans les /
      userEmail = user_id.replace(/^"|"$/g, '');
    }

    if (this.boardForm.valid) {
      const title = this.boardForm.value.title;
      const description = this.boardForm.value.description;
      const url = this.boardForm.value.url;
      const id = uuid.v4();
      const boardItem = { id, title, description, url, user_id: userEmail };

      this.boardService.addBoard(boardItem);
      this.dialogRef.close();
    } else {
      console.log('erreur');
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
