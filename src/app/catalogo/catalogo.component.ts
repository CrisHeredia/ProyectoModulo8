import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';
import { FormsModule} from "@angular/forms"

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [DataService]
})

export class CatalogoComponent implements OnInit {

  productos: any [] = [];
  aux : any[] = [];

  constructor(private httpService : HttpService, private router : Router) { }

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
    return this.productos;
  }

  reSearch(valor) {
     if (!valor){
       this.productos = this.aux;
    } else {
      this.productos = this.aux.filter(item => item.Nombre.startsWith(valor));
    }
  }
}
