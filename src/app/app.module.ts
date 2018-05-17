import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagosPage } from '../pages/pagos/pagos';
import { ViajesPage } from '../pages/viajes/viajes';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { PromocionesPage } from '../pages/promociones/promociones';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { AgregarMTodoDePagoPage } from '../pages/agregar-mtodo-de-pago/agregar-mtodo-de-pago';
import { PromoRegaloPage } from '../pages/promo-regalo/promo-regalo';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CompraPage } from '../pages/compra/compra';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagosPage,
    ViajesPage,
    AyudaPage,
    PromocionesPage,
    ConfiguraciNPage,
    CuentaPage,
    AgregarMTodoDePagoPage,
    PromoRegaloPage,
    LoginPage,
    SignupPage,
    CompraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagosPage,
    ViajesPage,
    AyudaPage,
    PromocionesPage,
    ConfiguraciNPage,
    CuentaPage,
    AgregarMTodoDePagoPage,
    PromoRegaloPage,
    LoginPage,
    SignupPage,
    CompraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}