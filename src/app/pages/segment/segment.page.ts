import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  heroes: Observable<any[]>;
  publisher: '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    // console.log(event.detail)
    if (event.detail.value === 'todos') {
      return this.publisher = '';
    }
    
    this.publisher = event.detail.value;
  }
}
