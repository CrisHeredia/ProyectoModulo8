import { Component, OnInit } from '@angular/core'
import { HttpService} from '../http.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})

export class BarraNavegacionComponent implements OnInit {

  carrito : any[] = [];
  aux : any[];
  registros : number;

  constructor(private httpService : HttpService, private router : Router,  private dataService: DataService) { }

  ngOnInit() {
    this.registros = 0;
    this.aux = [];
    this.httpService.getDatosCarrito()
    .subscribe(
      (data: Response) => {
        for (let key in data){
          this.aux.push(data[key]);
        }
        this.carrito = this.aux;
        this.registros = this.carrito.length;
      }
    )
  }
}
