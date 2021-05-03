import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  
  name: string = '';
  
  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    console.log('submit');
    console.log(this.user);
    console.log(form);
  }

}
