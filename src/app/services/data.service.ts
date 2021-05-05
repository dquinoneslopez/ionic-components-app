import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
