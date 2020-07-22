import { Component, OnInit } from '@angular/core'
import { HttpService} from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
  }

}
