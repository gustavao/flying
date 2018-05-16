import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CuentaPage } from '../cuenta/cuenta';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-configuraci-n',
  templateUrl: 'configuraci-n.html'
})
export class ConfiguraciNPage {

  constructor(public navCtrl: NavController) {
  }
  goToCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CuentaPage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
}
