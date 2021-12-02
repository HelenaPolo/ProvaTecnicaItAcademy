import { Injectable } from '@angular/core';
import { Starships } from '../Models/starships';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  url: string = 'https://swapi.dev/api/';
  endPoint: string = 'starships';
  token!: string;

  constructor(
    private httpClient: HttpClient,
  ) {}

   getAllStarships() {
    console.log('hola');
    console.log(`${this.url}${this.endPoint}`);
    return this.httpClient.get<Starships>(`${this.url}${this.endPoint}`);
  }
  getStarshipById(id: string){
    return this.httpClient.get(id);
  }
}

