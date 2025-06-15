import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  template: `
    <h2>Bienvenido</h2>
    <button mat-raised-button color="accent" (click)="logout()">Cerrar sesión</button>
  `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/']);
  }
}
