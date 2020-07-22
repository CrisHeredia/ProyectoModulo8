import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpService} from '../http.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})

export class LoginComponent implements OnInit{

  usuarios: string [] = [];
  email: string;
  password: string;

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
  }

  enviarForm(form){
    this.email = form.value.user;
    this.password = form.value.password;
    var mensaje: number;

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
