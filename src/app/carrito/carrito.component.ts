import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';
import { ProdCatalogo } from '../Producto';
//import { Productos } from '../catalogo/catalogo.component'

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
  cantDisp : number = 0;
  producto : string = "";
  ruta : string = "";
  productos: any [] = [];
  aux2 : any[] = [];
  pos : number = 0;

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
    this.httpService.getDatosProductos()
    .subscribe(
      (data: Response) => {
        for (let key in data){
          this.aux2.push(data[key]);
        }
        this.productos = this.aux2;
        for (var i = 0; i < this.carrito.length; i++) {
          this.cantSol = this.carrito[i].CantSol;
          this.producto = this.carrito[i].NomProd;
          this.ruta = this.carrito[i].Ruta;
          this.cantDisp = this.productos.find(x => x.Nombre == this.producto).CantDisp-this.cantSol;
          this.pos=this.productos.findIndex(x => x.Nombre == this.producto);
          let actProducto = new ProdCatalogo;
          actProducto.Nombre = this.producto;
          actProducto.Ruta = this.ruta;
          actProducto.CantDisp = this.cantDisp;
          actProducto.Precio = this.productos.find(x => x.Nombre == this.producto).Precio;
          this.httpService.updateCant(actProducto,this.pos)
          .subscribe(
            (data: Response) => console.log(data)
          )
        }
      }
    )
    this.httpService.borrarProdCarrito()
    .subscribe(
      (data: Response) => console.log(data)
    )
    this.router.navigate(['/navegacion/catalogo']);
  }
}
