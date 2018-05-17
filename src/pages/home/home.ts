import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ocultar: boolean = false;
  public queryText: string;
  public val:string;
  envio={
    valor:""
  }

  constructor(public navCtrl: NavController) {
  }

  searchAction(texto: any) {
    this.val = texto.target.value;
    console.log("caja de texto " + this.val);
    if(this.val=="peru" || this.val=="brasil" || this.val=="bogota"){
      this.ocultar=true;
    }else{
      this.ocultar=false;
    }

    this.envio.valor=this.val;
  }

  goToCompra(params){
    if (!params) 
    params = {};
    this.navCtrl.push(CompraPage,this.envio);
  }

}
