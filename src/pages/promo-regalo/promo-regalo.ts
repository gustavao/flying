import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagosPage } from '../pagos/pagos';
import { AgregarMTodoDePagoPage } from '../agregar-mtodo-de-pago/agregar-mtodo-de-pago';

@Component({
  selector: 'page-promo-regalo',
  templateUrl: 'promo-regalo.html'
})
export class PromoRegaloPage {

  constructor(public navCtrl: NavController) {
  }
  goToPagos(params){
    if (!params) params = {};
    this.navCtrl.push(PagosPage);
  }goToAgregarMTodoDePago(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarMTodoDePagoPage);
  }
}
