import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PagosPage } from '../pages/pagos/pagos';
import { AgregarMTodoDePagoPage } from '../pages/agregar-mtodo-de-pago/agregar-mtodo-de-pago';
import { ViajesPage } from '../pages/viajes/viajes';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { PromocionesPage } from '../pages/promociones/promociones';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { CuentaPage } from '../pages/cuenta/cuenta';


import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPagos(params){
    if (!params) params = {};
    this.navCtrl.push(PagosPage);
  }goToAgregarMTodoDePago(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarMTodoDePagoPage);
  }goToViajes(params){
    if (!params) params = {};
    this.navCtrl.push(ViajesPage);
  }goToAyuda(params){
    if (!params) params = {};
    this.navCtrl.push(AyudaPage);
  }goToPromociones(params){
    if (!params) params = {};
    this.navCtrl.push(PromocionesPage);
  }goToConfiguraciN(params){
    if (!params) params = {};
    this.navCtrl.push(ConfiguraciNPage);
  }goToCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CuentaPage);
  }
}
