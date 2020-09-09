import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 
  
  public carrito: Array<Producto> = [];
  constructor(private httpClien:HttpClient) { }

  public obtenerTodos() {
    return this.httpClien.get<Producto[]>("http://192.168.0.107:3000/productos");
  }
  public obtenerPorId(id: string) {
     return this.httpClien.get<Producto>("http://192.168.0.107:3000/productos/"+id);
  }

  public agregar(prod: Producto) {
   // this.productos.push(prod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
}
