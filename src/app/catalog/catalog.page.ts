import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonButton 
} from '@ionic/angular/standalone';

// Importamos nuestro archivo de datos simulados
import { DataService } from '../services/data'; 

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonMenuButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonButton
  ]
})
export class CatalogPage implements OnInit {
  
  // Aquí guardaremos los muebles que nos pase el DataService
  productos: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Cuando la pantalla carga, pedimos los productos
    this.productos = this.dataService.getProductos();
  }
}