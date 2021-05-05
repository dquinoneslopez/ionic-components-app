import { Component, OnInit } from '@angular/core';
import { Componente } from './interfaces/components';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  components: Observable<Componente[]>;
  
  constructor(
    private dataService: DataService
  ) {}
  
  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }
  
}
