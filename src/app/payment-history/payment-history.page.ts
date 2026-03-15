import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonCard, IonCardContent,
  IonItem, IonLabel, IonNote, IonIcon, IonCardHeader, IonCardTitle
} from '@ionic/angular/standalone';

import { DataService } from '../services/data';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonCard, IonCardContent,
    IonItem, IonLabel, IonNote, IonIcon, IonCardHeader, IonCardTitle
  ]
})
export class PaymentHistoryPage implements OnInit {
  
  producto: any; 
  abonos: any[] = []; 
  
  // Nuevas variables para el RF-10
  totalAbonado: number = 0;
  saldoPendiente: number = 0;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : 0;
    
    this.producto = this.dataService.getProductoById(id);
    this.abonos = this.dataService.getAbonosByProductoId(id);

    // Mates de Frontend: Calculamos cuánto ha pagado y cuánto debe
    if (this.producto) {
      // Sumamos todos los montos del arreglo de abonos
      this.totalAbonado = this.abonos.reduce((suma, abono) => suma + abono.monto, 0);
      // Restamos lo abonado al precio total
      this.saldoPendiente = this.producto.precio_total - this.totalAbonado;
    }
  }
}