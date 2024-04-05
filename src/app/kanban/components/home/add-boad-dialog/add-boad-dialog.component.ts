import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-boad-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-boad-dialog.component.html',
  styleUrl: './add-boad-dialog.component.scss'
})
export class AddBoadDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddBoadDialogComponent>) {}

  ngOnInit() {}

  public boardForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    url: new FormControl(''),
  });

  submit(type: 'cancel' | 'valid'): void {
    if(type === 'valid') {
      this.dialogRef.close(this.boardForm.value)
    } else {
      this.dialogRef.close();
    }
    
  }

}
