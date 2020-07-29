import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  nombreProd : string;
  rutaProd : string;
  precioProd : number;
  cantProd : number;

  constructor(private rutaActiva: ActivatedRoute) {
    this.nombreProd = this.rutaActiva.snapshot.params['nombre'];
    this.rutaProd = this.rutaActiva.snapshot.params['imagen'];
    this.precioProd = this.rutaActiva.snapshot.params['precio'];
    this.cantProd = this.rutaActiva.snapshot.params['cantidad'];
   }

  ngOnInit() {

  }
}
