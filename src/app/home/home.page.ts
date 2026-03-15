import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

// 1. Importamos los componentes específicos de Ionic (Más ligero y moderno)
import { 
  IonContent, IonItem, IonInput, IonButton, IonIcon 
} from '@ionic/angular/standalone';

// 2. Importamos los dibujitos
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline, hammerOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  // Aquí declaramos solo lo que el HTML necesita
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonItem, 
    IonInput, 
    IonButton, 
    IonIcon
  ]
})
export class HomePage {
  username = '';
  password = '';

  // Mantenemos la inyección de servicios de tu amigo intacta
  constructor(private router: Router, private apiService: ApiService) {
    // Registramos los íconos
    addIcons({ personOutline, lockClosedOutline, hammerOutline });
  }

  // === LA LÓGICA DE TU AMIGO (SIN TOCAR) ===
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