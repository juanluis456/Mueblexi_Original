import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

// 1. Agregamos IonSegment e IonSegmentButton aquí:
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon, 
  IonBackButton, IonButtons, IonSegment, IonSegmentButton 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { 
  personOutline, lockClosedOutline, mailOutline, 
  cashOutline, peopleOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, IonIcon, 
    IonBackButton, IonButtons, 
    IonSegment, IonSegmentButton // <--- Y TAMBIÉN LOS AGREGAMOS AQUÍ
  ]
})
export class RegisterPage {
  
  userData = {
    nombre: '',
    username: '', 
    password: '',
    rol: 'cliente' 
  };

  constructor(private apiService: ApiService, private router: Router) {
    addIcons({ personOutline, lockClosedOutline, mailOutline, cashOutline, peopleOutline });
  }

  register() {
    if (!this.userData.nombre || !this.userData.username || !this.userData.password) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    this.apiService.registrarUsuario(this.userData).subscribe({
      next: (res) => {
        alert('¡Registro exitoso! Ya puedes iniciar sesión.');
        this.router.navigate(['/home']); 
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