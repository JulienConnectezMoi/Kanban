import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-boad-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-boad-dialog.component.html',
  styleUrl: './add-boad-dialog.component.scss'
})
export class AddBoadDialogComponent {
  private idCounter: number = 0;

  constructor(
    public dialogRef: MatDialogRef<AddBoadDialogComponent>,
    private localStorageService: LocalStorageService
  ) {}

  public boardForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    url: new FormControl(''),
  });

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    if (this.boardForm.valid) {
      const title = this.boardForm.value.title;
      const description = this.boardForm.value.description;
      const url = this.boardForm.value.url;

      this.idCounter++;

      const boardItem = { id: this.idCounter, title, description, url };

      this.localStorageService.setOne('boards', boardItem);
      this.dialogRef.close();
    } else {
      console.log('erreur')
    }
  }
}
