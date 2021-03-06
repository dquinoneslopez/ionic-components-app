import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";

import { Componente } from '../interfaces/components';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getMenuOptions()  {
    return this.httpClient.get<Componente[]>('/assets/data/menu-options.json');
  }
  
  getAlbums()  {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/albums');
  }
  
  getHeroes()  {
    return this.httpClient
               .get<Componente[]>('/assets/data/superheroes.json')
               .pipe(
                  delay(1500)
                );
  }
}
