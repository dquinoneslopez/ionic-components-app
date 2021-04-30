import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  
  data = [
    {
      name: 'primary',
      selected: 'true'
    },
    {
      name: 'secondary',
      selected: 'true'
    },
    {
      name: 'tertiary',
      selected: 'true'
    },
    {
      name: 'success',
      selected: 'true'
    },
    {
      name: 'warning',
      selected: 'true'
    },
    {
      name: 'danger',
      selected: 'true'
    },
    {
      name: 'light',
      selected: 'true'
    },
    {
      name: 'dark',
      selected: 'true'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  onClick(entry: any) {
    console.log(entry);
  }
  
  showForm() {
    console.log(this.form)
  }

}
