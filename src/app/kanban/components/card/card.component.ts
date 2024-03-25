import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() backgroundImageUrl?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.backgroundImageUrl) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `url(${this.backgroundImageUrl})`);
    }
  }

  navigateToNewPage() {
    this.router.navigate(['board', this.id]);
  }
}
