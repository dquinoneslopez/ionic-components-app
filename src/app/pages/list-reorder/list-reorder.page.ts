import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  
  characters: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash'];
  
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() { }

  ngOnInit() {
  }
  
  doReorder(event) {
    const itemToMove = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }
  
  onClickToggle() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
