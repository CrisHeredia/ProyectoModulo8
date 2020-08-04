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
  cantSol : number = 0;
  producto : string = "";

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
    this.httpService.getDatosCarrito()
    .subscribe(
      (data: Response) => {
        for (let key in data){
          this.aux.push(data[key]);
        }
        this.carrito = this.aux;
        for (var i = 0; i < this.carrito.length; i++) {
            this.suma+= this.carrito[i].Subtotal;
        }
      }
    )
  }

  pagar(){
    for (var i = 0; i < this.carrito.length; i++) {
      this.cantSol = this.carrito[i].CantSol;
      this.producto = this.carrito[i].NomProd;
      alert(this.producto+this.cantSol);
    }
    this.router.navigate(['/navegacion/catalogo']);
  }
}
