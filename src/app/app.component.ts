import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import { InformacionPage } from '../pages/informacion/informacion';
import { SintomasPage } from '../pages/sintomas/sintomas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo:string, component: any,icon:string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
    this.rootPage = HomePage;
    this.pages= [
      {titulo : 'Inicio', component: HomePage, icon: 'home'},
      {titulo : 'Contacto', component: ContactoPage, icon: 'mail'},
    {titulo:'Informacion',component: InformacionPage,icon:'alert'},
    {titulo: 'Sintomas',component:SintomasPage,icon:''}
    

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

