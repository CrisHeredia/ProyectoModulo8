import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito : any [] = [];
  aux : any[] = [];
  suma : number = 0;

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
    this.httpService.getDatosCarrito()
    .subscribe(
      (data: Response) => {
        for (let key in data){
          this.aux.push(data[key]);
        }
        this.carrito = this.aux;
        console.log(this.carrito);
        //for (let numero of this.carrito){
          //this.suma = this.suma.Subtotal;
        //}
      }
    )
    let registros = this.carrito.length;
    console.log(registros);
    for (var i = 0; i < this.carrito.length; i++) {
        this.suma+= this.carrito[i].Subtotal;
        //alert(this.carrito[i].Subtotal);
    }
  }
    //return this.suma;
}
