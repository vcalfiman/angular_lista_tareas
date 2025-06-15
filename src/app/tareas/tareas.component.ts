import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './tareas.component.html',
  standalone: true,
  styles: [`
    .tarea-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
      border-bottom: 1px solid #ddd;
    }

    .texto-tarea {
      flex-grow: 1;
      font-size: 16px;
    }

    .completada {
      text-decoration: line-through;
      color: gray;
    }

    .input-editar {
      flex-grow: 1;
      max-width: 100%;
    }

    button[mat-icon-button] {
      margin-left: 8px;
    }
  `]
})
export class TareasComponent {
  filtro = 'todas';
  nuevaTarea = '';
  tareas: { texto: string; completada: boolean; editando?: boolean }[] = [];

  constructor() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea.trim(), completada: false });
      this.nuevaTarea = '';
      this.guardarTareas();
    }
  }

  eliminarTarea(tarea: any) {
    const index = this.tareas.indexOf(tarea);
    if (index > -1) {
      this.tareas.splice(index, 1);
      this.guardarTareas();
    }
  }

  editarTarea(tarea: any) {
    tarea.editando = true;
  }

  guardarEdicion(tarea: any) {
    tarea.editando = false;
    this.guardarTareas();
  }

  guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  get tareasFiltradas() {
    if (this.filtro === 'completadas') return this.tareas.filter(t => t.completada);
    if (this.filtro === 'pendientes') return this.tareas.filter(t => !t.completada);
    return this.tareas;
  }
}
