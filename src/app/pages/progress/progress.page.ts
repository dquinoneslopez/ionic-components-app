import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  
  percentage: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  rangeChange(event) {
    // console.log(event.detail.value)
    this.percentage = event.detail.value / 100;
  }

}
