import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

/* IMPORTAMOS LOS DIBUJITOS NUEVOS (Incluyendo billete y personas) */
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline, mailOutline, cashOutline, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage {
  
  // Cambiamos "correo" por "username" para que Python lo guarde bien
  userData = {
    nombre: '',
    username: '', 
    password: '',
    rol: 'cliente' // Opción seleccionada por defecto
  };

  constructor(private apiService: ApiService, private router: Router) {
    // Registramos los íconos
    addIcons({ personOutline, lockClosedOutline, mailOutline, cashOutline, peopleOutline });
  }

  register() {
    if (!this.userData.nombre || !this.userData.username || !this.userData.password) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    // Enviamos los datos a Python
    this.apiService.registrarUsuario(this.userData).subscribe({
      next: (res) => {
        alert('¡Registro exitoso! Ya puedes iniciar sesión.');
        this.router.navigate(['/home']); // Te manda al login de madera
      },
      error: (err) => {
        alert('Error al registrar: ' + (err.error.error || 'Problema con el servidor'));
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/home']);
  }
}