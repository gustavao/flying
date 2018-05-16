import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarMTodoDePagoPage } from '../agregar-mtodo-de-pago/agregar-mtodo-de-pago';
import { PromoRegaloPage } from '../promo-regalo/promo-regalo';

@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html'
})
export class PagosPage {

  constructor(public navCtrl: NavController) {
  }
  goToAgregarMTodoDePago(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarMTodoDePagoPage);
  }

  goToPromoRegalo(params){
    if (!params) params = {};
    this.navCtrl.push(PromoRegaloPage);
  }
}
