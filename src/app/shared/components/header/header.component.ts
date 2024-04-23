import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() public appName!: string;
  @Input() public isLoggedIn!: boolean;

  @Output() public logout = new EventEmitter<void>();

  constructor(private router: Router) {} // Inject Router service

  navigateToHome() {
    this.router.navigate(['/home']); // Navigate to '/home'
  }
}
