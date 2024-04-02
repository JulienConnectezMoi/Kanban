import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { MatButtonModule } from '@angular/material/button';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-todo-dialog',
  standalone: true,
  imports: [MatFormField, MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>, private localStorageService: LocalStorageService) {}

  public todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    if (this.todoForm.valid) {
      const title = this.todoForm.value.title;
      const description = this.todoForm.value.description;
      const id = uuid.v4();
      const todoItem = { id, title, description, columnId: 1 };

      this.localStorageService.setOne('todos', todoItem);
      this.dialogRef.close();
    } else {
      console.log('erreur')
    }
  }
}
