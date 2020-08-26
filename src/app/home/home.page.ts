import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private productos = [{
    "id": 1,
    "nombre": "Celular",
    "precio": 1500,
    "cantidad": 10,
    "imagen": "http://dummyimage.com/102x217.jpg/dddddd/000000" 
  },
  {
    "id": 2,
    "nombre": "Tablet",
    "precio": 3000,
    "cantidad": 3,
    "imagen": "http://dummyimage.com/131x116.jpg/5fa2dd/ffffff"
    
    
    },
    {
      "id": 3,
      "nombre": "tv",
      "precio": 5600,
      "cantidad": 0,
      "imagen": "http://dummyimage.com/131x116.jpg/5fa2dd/ffffff"
      
      
      }]

  constructor() {}

}
