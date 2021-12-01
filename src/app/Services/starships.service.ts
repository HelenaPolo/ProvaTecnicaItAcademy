import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Starships } from '../Models/starships';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  url: string = 'https://swapi.dev/api/';
  endPoint: string = 'starships';
  token!: string;

  constructor(
    private httpClient: HttpClient,
    //private loginService: LoginService,
  ) {
    //this.token = this.loginService.getBearerToken;
   }

   getAllStarships() {
     console.log('hola');
     console.log(`${this.url}${this.endPoint}`);
    return this.httpClient.get<Starships>(`${this.url}${this.endPoint}`);

    //const headers = new HttpHeaders({
      //Authorization: this.token,
    //});

    /*return this.httpClient.get(
      `${this.url}${this.endPoint}/list/`,
      { headers }
    );*/
  }
  getStarshipById(id: string){
    return this.httpClient.get(id);

  }
}

