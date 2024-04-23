import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-todo-dialog',
  standalone: true,
  imports: [MatFormField, MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>) {}

  ngOnInit() {}

  public todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  submit(type: 'cancel' | 'valid'): void {
    if(type === 'valid') {
      this.dialogRef.close(this.todoForm.value)
    } else {
      this.dialogRef.close();
    }

  }
}
