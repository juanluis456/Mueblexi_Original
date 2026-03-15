import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent, IonButton, IonIcon 
} from '@ionic/angular/standalone';

// Importamos los íconos y la función para registrarlos
import { addIcons } from 'ionicons';
import { cartOutline, searchOutline } from 'ionicons/icons';

// Importamos nuestro cerebro de datos
import { DataService } from '../services/data';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonButton, IonIcon
  ]
})
export class DetailProductPage implements OnInit {
  
  producto: any; // Aquí guardaremos el mueble que el usuario eligió

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService
  ) { 
    // REGISTRAMOS LOS ICONOS PARA QUE NO DEN ERROR
    addIcons({ 'cart-outline': cartOutline, 'search-outline': searchOutline });
  }

  ngOnInit() {
    // 1. Atrapamos el ID que viene en la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    
    // OJO: Si tu amigo usa MongoDB, los IDs suelen ser strings. 
    // Por ahora, como usamos el data.ts local, lo mantenemos como número:
    const id = idParam ? parseInt(idParam, 10) : 0;
    
    // 2. Buscamos el producto exacto
    this.producto = this.dataService.getProductoById(id);
  }
}