import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonItem, IonLabel, 
  IonInput, IonTextarea, IonButton, IonCard, IonCardContent,
  IonIcon // Importamos los íconos
} from '@ionic/angular/standalone';

// ¡AQUÍ IMPORTAMOS EL PLUGIN DE LA CÁMARA!
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-publish-product',
  templateUrl: './publish-product.page.html',
  styleUrls: ['./publish-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonMenuButton, IonItem, IonLabel, 
    IonInput, IonTextarea, IonButton, IonCard, IonCardContent, IonIcon
  ]
})
export class PublishProductPage implements OnInit {

  nombreProducto: string = '';
  descripcionProducto: string = '';
  precioProducto: number | null = null;
  imagenProducto: string | undefined = ''; // Aquí guardaremos la foto real

  constructor() { }

  ngOnInit() {
  }

  // --- NUEVA FUNCIÓN PARA ACTIVAR EL HARDWARE DEL CELULAR ---
  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Nos da la foto lista para mostrar en HTML
        source: CameraSource.Prompt // Pregunta al usuario si quiere usar Cámara o Galería
      });

      // Guardamos la foto capturada
      this.imagenProducto = image.dataUrl;
    } catch (error) {
      console.log("El usuario canceló la foto", error);
    }
  }

  publicarProducto() {
    if(!this.nombreProducto || !this.descripcionProducto || !this.precioProducto || !this.imagenProducto) {
      alert("Por favor, llena todos los datos y toma la foto del mueble.");
      return;
    }
    
    console.log("Publicando nuevo mueble:", {
      nombre: this.nombreProducto,
      descripcion: this.descripcionProducto,
      precio: this.precioProducto,
      imagen: "Foto capturada correctamente" 
    });

    alert(`¡El producto "${this.nombreProducto}" se publicó con éxito!`);
    
    // Limpiamos el formulario
    this.nombreProducto = '';
    this.descripcionProducto = '';
    this.precioProducto = null;
    this.imagenProducto = '';
  }
}