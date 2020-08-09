import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';
import { Producto } from '../Carrito';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component'

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: []
})

export class CatalogoComponent implements OnInit {

  productos: any [] = [];
  aux : any[] = [];

  constructor(private httpService : HttpService,
              private router : Router,
              private parent: BarraNavegacionComponent) { }

  ngOnInit() {
    this.httpService.getDatosProductos()
    .subscribe(
      (data: Response) => {
        for (let key in data){
          this.aux.push(data[key]);
        }
        this.productos = this.aux;
      }
    )
    //return this.productos;
  }

  reSearch(valor) {
     if (!valor){
       this.productos = this.aux;
    } else {
      this.productos = this.aux.filter(item => item.Nombre.startsWith(valor));
    }
  }

  addProd(prod,ruta,cantdisp,precio,cantsol) {
    if(!cantsol){
      cantsol=1;
    }
    if(cantsol>cantdisp){
      alert("No puede solicitar mas de lo existente ...")
    } else {
      let newProducto = new Producto;
      newProducto.NomProd = prod;
      newProducto.Ruta = ruta;
      newProducto.CantSol = cantsol;
      newProducto.Subtotal = precio * cantsol;
      this.httpService.sendDatos(newProducto)
      .subscribe(
        (data: Response) => console.log(data)
      )
    }
    this.parent.ngOnInit();
  }
}
