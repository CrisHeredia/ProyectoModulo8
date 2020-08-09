import { Injectable } from '@angular/core';
//import { LogService } from './log.service';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService{


  constructor(private httpService : HttpService){}

}
