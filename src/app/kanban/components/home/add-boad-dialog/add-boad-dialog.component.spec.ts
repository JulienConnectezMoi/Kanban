import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoadDialogComponent } from './add-boad-dialog.component';

describe('AddBoadDialogComponent', () => {
  let component: AddBoadDialogComponent;
  let fixture: ComponentFixture<AddBoadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBoadDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBoadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
