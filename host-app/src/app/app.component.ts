import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'host-app';

  constructor(
    private router: Router
  ) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
