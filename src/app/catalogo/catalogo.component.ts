import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [DataService]
})

export class CatalogoComponent implements OnInit {

  productos: any [] = [];
  //nombre: string;
  //precio: number;

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
    this.httpService.getDatosProductos()
    .subscribe(
      (data: Response) => {
        let aux : any[] = [];
        for (let key in data){
          aux.push(data[key]);
        }
        this.productos = aux;
        //console.log(this.productos);
      }
    )
    return this.productos;
  }
}
