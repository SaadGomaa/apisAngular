import { Component } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  constructor(private router: Router) {}


  navigateToHome() {
    const navigationExtras: NavigationExtras = { replaceUrl: true };
    this.router.navigate(['/home'], navigationExtras);
  }
  
}
