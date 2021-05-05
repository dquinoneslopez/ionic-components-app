import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Componente } from 'src/app/interfaces/components';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  // components: Componente[] = [];
  components: Observable<Componente[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }
  
  // showMenu() {
  //   this.menuController.open('first');
  // }

}
