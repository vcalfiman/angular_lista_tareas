import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // módulo para directivas routerLink etc.
import { Router } from '@angular/router';        // servicio para navegar programáticamente
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  template: `
    <h2>Bienvenido {{ username }} </h2>
    <button mat-raised-button color="accent" (click)="logout()">Cerrar sesión</button>
  `,
})
export class HomeComponent {
  username: string | null = null;
  constructor(private router: Router, private auth: AuthService) {
    this.username = this.auth.getUsername();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

