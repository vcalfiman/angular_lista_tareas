import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../auth.service';
// import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})

export class HomeComponent {
  username: string | null = null;

  constructor(private router: Router, private auth: AuthService) {
    this.username = this.auth.getUsername();
  }

  irATareas(): void {
    this.router.navigate(['/tareas']); // Navega a la ruta '/tareas'
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

