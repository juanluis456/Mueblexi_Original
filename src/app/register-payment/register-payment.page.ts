import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonItem, IonLabel, 
  IonInput, IonButton, IonDatetime, IonCard, IonCardContent,
  IonDatetimeButton, IonModal // <--- ¡AQUÍ ESTÁN LOS QUE FALTABAN!
} from '@ionic/angular/standalone';

import { DataService } from '../services/data';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.page.html',
  styleUrls: ['./register-payment.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonMenuButton, IonItem, IonLabel, 
    IonInput, IonButton, IonDatetime, IonCard, IonCardContent,
    IonDatetimeButton, IonModal // <--- Y LOS DECLARAMOS AQUÍ
  ]
})
export class RegisterPaymentPage implements OnInit {

  nombreCliente: string = '';
  nombreProducto: string = '';
  montoAbono: number | null = null;
  fechaAbono: string = new Date().toISOString(); 

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  guardarAbono() {
    if(!this.nombreCliente || !this.nombreProducto || !this.montoAbono) {
      alert("Por favor, llena todos los campos.");
      return;
    }
    
    console.log("Guardando abono:", {
      cliente: this.nombreCliente,
      producto: this.nombreProducto,
      monto: this.montoAbono,
      fecha: this.fechaAbono
    });

    alert(`¡Abono de $${this.montoAbono} registrado con éxito para ${this.nombreCliente}!`);
    
    this.nombreCliente = '';
    this.nombreProducto = '';
    this.montoAbono = null;
  }
}