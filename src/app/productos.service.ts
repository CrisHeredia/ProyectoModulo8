/*import { Injectable } from '@angular/core';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';

@Injectable()
export class ProductosService {

  constructor(private httpService : HttpService, private router : Router) { }
  //constructor(private httpService : HttpService, private router : Router){  }
  public productos = [];
  public aux = [];

 LlenarCatalogo(){
  this.httpService.getDatosProductos()
  .subscribe(
    (data: Response) => {
      for (let key in data){
        this.aux.push(data[key]);
      }
      this.productos = this.aux;
    }
  )
  return this.productos;
 }
}*/
