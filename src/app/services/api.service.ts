import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Usamos una variable base para no repetir la dirección
  private baseUrl = 'http://127.0.0.1:5001/api';

  constructor(private http: HttpClient) { }

  // 1. Función para iniciar sesión (Se usa desde Home)
  loginUsuario(credenciales: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credenciales);
  }

  // 2. Función para registrar usuarios (Se usa desde Register)
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, usuario);
  }

  // 3. Función para traer los muebles (Para tu catálogo)
  getMuebles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/productos`);
  }
}