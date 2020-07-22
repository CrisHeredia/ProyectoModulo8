import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [DataService]
})
export class CatalogoComponent implements OnInit {

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
  }

consultarDatos(){
  this.httpService.getDatos()
  .subscribe(
    (data: Response) => {
      let aux : any[] = [];
      for (let key in data){
        aux.push(data[key]);
      }
      this.usuarios = aux;
      mensaje = 0;
      for (let obj of aux) {
        for (let key in obj) {
          var usuario = obj[key].Email;
          var password = obj[key].Contrasena;
          if(this.email===usuario && this.password===password){
            mensaje = 1;
          }
        }
      }
      if (mensaje === 0){
        alert("Usuario y password no encontrados ...");
      } else {
        console.log(data);
        //this.router.navigate(['/navegacion/catalogo']);
      }
    }
  )
  return this.usuarios;
}

}
