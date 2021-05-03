import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  
  birthDate: Date = new Date();
  
  customPickerOptions = {
    buttons: [
      {
        text: 'Hello',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'World',
        handler: (event) => {
          console.log('log!');
        }
      }
    ]
  };
  
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  constructor() { }

  ngOnInit() {
  }
  
  dateChange(event) {
    // console.log(event)
    console.log(new Date(event.detail.value))
  }

}
