import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private productos:Array<Producto> = [{
  "id": "1",
  "nombre": "Celular",
  "precio": 1500,
  "cantidad": 10,
  "imagen": "https://http2.mlstatic.com/google-pixel-4-64gb-negro-nuevo-caja-sellada-D_NQ_NP_863257-MLA40463778044_012020-F.webp" 
},
{
  "id": "2",
  "nombre": "Tablet",
  "precio": 3000,
  "cantidad": 3,
  "imagen": "https://images.fravega.com/f100/34eb7e44fea937adf5efeb9fc0411c3f.jpg"
  
  
  },
  {
    "id": "3",
    "nombre": "tv",
    "precio": 5600,
    "cantidad": 0,
    "imagen": "https://s3.amazonaws.com/gpcdn-dev/avenida/products/photos/5d/a4d/9c0e5e8a4ddd51b9092d5d743c6bcca5_l.png"
    
    
    }]
  
  public carrito: Array<Producto> = [];
  constructor() { }

  public obtenerTodos() {
    return this.productos;
  }
  public obtenerPorId(id: string) {
    for (let prod of this.productos) {
      if (prod.id == id) { 
        return prod;
      }
    }
  }

  public agregar(prod: Producto) {
    this.productos.push(prod);
  
  }
  public getCarrito() {
    return this.carrito;
  }
}
