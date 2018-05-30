import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import {InformacionPage }from'../pages/informacion/informacion';
import { SintomasPage } from '../pages/sintomas/sintomas';
import { EscuelasPage } from '../pages/escuelas/escuelas';
import {QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,ContactoPage,InformacionPage,SintomasPage,EscuelasPage,QuienesSomosPage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ContactoPage,InformacionPage,SintomasPage,EscuelasPage, QuienesSomosPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
