import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 1. Base de datos de Productos
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

  // 2. Base de datos de Abonos (NUEVO)
  private abonos = [
    { id_abono: 101, id_producto: 1, fecha: '01/MAR/2026', monto: 1500.00 },
    { id_abono: 102, id_producto: 1, fecha: '10/MAR/2026', monto: 1000.00 },
    { id_abono: 103, id_producto: 2, fecha: '05/MAR/2026', monto: 2000.00 }
  ];

  constructor() { }

  // Funciones de Productos
  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(p => p.id_producto === id);
  }

  // Funciones de Abonos (NUEVO)
  getAbonosByProductoId(idProducto: number) {
    // Filtramos para que solo devuelva los pagos del mueble que estamos viendo
    return this.abonos.filter(abono => abono.id_producto === idProducto);
  }
}