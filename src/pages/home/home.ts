import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
url:string="https://www.youtube.com";
  constructor(private iab: InAppBrowser, public navCtrl: NavController) {
    
   // this.openPage();
  }
  
/*
  openPage(){
    const options:InAppBrowserOptions={
    zoom:'no'
    }

    const browser=this.iab.create(this.url,'_blank',options);

    browser.show();

  }
*/


}
