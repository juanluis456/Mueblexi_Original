import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'catalog',
    loadComponent: () => import('./catalog/catalog.page').then(m => m.CatalogPage),
  },
  // --- TUS PANTALLAS RECUPERADAS ---
  {
    path: 'detail-product',
    loadComponent: () => import('./detail-product/detail-product.page').then( m => m.DetailProductPage)
  },
  {
    path: 'register-payment',
    loadComponent: () => import('./register-payment/register-payment.page').then( m => m.RegisterPaymentPage)
  },
  {
    path: 'payment-history',
    loadComponent: () => import('./payment-history/payment-history.page').then( m => m.PaymentHistoryPage)
  }
];