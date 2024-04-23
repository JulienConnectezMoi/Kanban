import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCouleurComponent } from './tag-couleur.component';

describe('TagCouleurComponent', () => {
  let component: TagCouleurComponent;
  let fixture: ComponentFixture<TagCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagCouleurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
