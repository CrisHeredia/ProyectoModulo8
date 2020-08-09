import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getDatos(){
    return this.http.get('https://tienda-38714.firebaseio.com/.json')
    .map((response:Response)=>response.json())
  }

  getDatosProductos(){
    return this.http.get('https://tienda-38714.firebaseio.com/Productos/.json')
    .map((response:Response)=>response.json())
  }

  sendDatos(producto){
    const datos = JSON.stringify(producto);
    return this.http.post('https://tienda-38714.firebaseio.com/Carrito/.json',datos)
    .map((response:Response)=>response.json())
  }

  getDatosCarrito(){
    return this.http.get('https://tienda-38714.firebaseio.com/Carrito/.json')
    .map((response:Response)=>response.json())
  }

  updateCant(producto,pos){
    const datos = JSON.stringify(producto);
    return this.http.put('https://tienda-38714.firebaseio.com/Productos/'+pos+'.json',datos)
    .map((response:Response)=>response.json())
  }

  borrarProdCarrito(){
    return this.http.delete('https://tienda-38714.firebaseio.com/Carrito/.json')
    .map((response:Response)=>response.json())
  }
}
