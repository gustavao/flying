import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {
   
  public destino:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.destino = navParams.data;
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

}
