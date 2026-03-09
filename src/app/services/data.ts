import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Nuestra base de datos simulada de Productos (Para el Catálogo)
  private productos = [
    {
      id_producto: 1,
      nombre: 'Sala Esquinera Minimalista',
      descripcion: 'Hermosa sala esquinera de 3 piezas en tela lino color gris. Ideal para espacios modernos.',
      precio_total: 8500.00,
      imagen: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id_producto: 2,
      nombre: 'Comedor de Madera 6 Sillas',
      descripcion: 'Comedor rústico fabricado en madera de pino con acabado en barniz mate. Sillas tapizadas.',
      precio_total: 6200.00,
      imagen: 'https://images.unsplash.com/photo-1617806118233-18e1c0945594?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id_producto: 3,
      nombre: 'Cama Matrimonial con Base',
      descripcion: 'Base de cama matrimonial con cabecera acolchada en color azul marino. Estructura resistente.',
      precio_total: 4800.00,
      imagen: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id_producto: 4,
      nombre: 'Ropero 4 Puertas con Espejo',
      descripcion: 'Amplio ropero color chocolate con 4 cajones inferiores y tubo para colgar ropa.',
      precio_total: 5100.00,
      imagen: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  constructor() { }

  // Función para enviar los productos al catálogo
  getProductos() {
    return this.productos;
  }

  // Función para obtener un solo producto (Para la pantalla de detalles)
  getProductoById(id: number) {
    return this.productos.find(p => p.id_producto === id);
  }
}