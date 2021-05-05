import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  
  loading: HTMLIonLoadingElement;
  
  constructor(
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.presentLoading();
    setTimeout(() => {
      this.loading.dismiss()
    }, 2000);
  }
  
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  
}
