import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea05';

  constructor(private router: Router) {}

  isActive(route: string) {
    return this.router.isActive(route, true);
  }
}
