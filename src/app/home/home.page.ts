import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

// 1. IMPORTAMOS LOS DIBUJITOS DE IONIC
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline, hammerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  username = '';
  password = '';

  constructor(private router: Router, private apiService: ApiService) {
    // 2. REGISTRAMOS LOS ÍCONOS PARA QUE LA PANTALLA LOS PUEDA DIBUJAR
    addIcons({ personOutline, lockClosedOutline, hammerOutline });
  }

  login() {
    if (!this.username || !this.password) {
      alert('Por favor, ingresa tu usuario y contraseña');
      return;
    }

    const credenciales = {
      username: this.username,
      password: this.password
    };

    console.log('Validando con la base de datos...', credenciales);

    this.apiService.loginUsuario(credenciales).subscribe({
      next: (res) => {
        console.log('Login exitoso:', res);
        alert('¡Bienvenido a Mueblexi!');
        this.router.navigate(['/catalog']); 
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        alert('Error: ' + (err.error.error || 'No se pudo conectar con el servidor'));
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}