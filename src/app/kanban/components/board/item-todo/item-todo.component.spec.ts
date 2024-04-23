import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTodoComponent } from './ItemTodoComponent';

describe('ItemTodoComponent', () => {
  let component: ItemTodoComponent;
  let fixture: ComponentFixture<ItemTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
