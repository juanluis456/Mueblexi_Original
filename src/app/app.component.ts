import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonList, IonItem, IonIcon, 
  IonLabel, IonMenuToggle, IonItemDivider 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // <--- IMPORTA ESTO
import { 
  storefrontOutline, walletOutline, cashOutline, 
  addCircleOutline, logOutOutline 
} from 'ionicons/icons'; // <--- IMPORTA LOS ICONOS QUE USAMOS

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
    IonTitle, IonContent, IonList, IonItem, IonIcon, 
    IonLabel, IonMenuToggle, IonItemDivider, RouterLink
  ],
})
export class AppComponent {
  constructor() {
    // REGISTRAMOS LOS ICONOS PARA QUE IONIC LOS ENCUENTRE
    addIcons({ 
      'storefront-outline': storefrontOutline, 
      'wallet-outline': walletOutline, 
      'cash-outline': cashOutline, 
      'add-circle-outline': addCircleOutline, 
      'log-out-outline': logOutOutline 
    });
  }
}