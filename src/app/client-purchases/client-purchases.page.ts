import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonButton, IonIcon, IonItem, IonLabel
} from '@ionic/angular/standalone';

import { DataService } from '../services/data';

@Component({
  selector: 'app-client-purchases',
  templateUrl: './client-purchases.page.html',
  styleUrls: ['./client-purchases.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonMenuButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonButton, IonIcon, IonItem, IonLabel
  ]
})
export class ClientPurchasesPage implements OnInit {

  misCompras: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Simulamos que este cliente en específico solo compró los muebles con ID 1 y 2
    const todosLosProductos = this.dataService.getProductos();
    this.misCompras = todosLosProductos.filter(p => p.id_producto === 1 || p.id_producto === 2);
  }
}