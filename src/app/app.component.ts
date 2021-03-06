import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import { InformacionPage } from '../pages/informacion/informacion';
import { SintomasPage } from '../pages/sintomas/sintomas';
import { EscuelasPage } from '../pages/escuelas/escuelas';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { AdultosPage } from '../pages/adultos/adultos';
import { SugerenciasPage } from '../pages/sugerencias/sugerencias';
import { RecreacionPage } from '../pages/recreacion/recreacion';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCUgtslUd0UdlzWY6NWkIW-X_-C_pTdc44",
  authDomain: "appasperger.firebaseapp.com",
  databaseURL: "https://appasperger.firebaseio.com",
  projectId: "appasperger",
  storageBucket: "appasperger.appspot.com",
  messagingSenderId: "478828909687"

};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Escuelas', component: EscuelasPage, icon: 'school' },
      { titulo: 'Informacion', component: InformacionPage, icon: 'information-circle' },
      { titulo: 'Sintomas', component: SintomasPage, icon: 'heart' },
      { titulo: 'Recreacion', component: RecreacionPage, icon: 'color-palette' },
      { titulo: 'En adultos', component: AdultosPage, icon: 'contact' },
      { titulo: 'Sugerencia', component: SugerenciasPage, icon: 'create' },
      { titulo: 'Acerca de', component: QuienesSomosPage, icon: 'star-half' },
      { titulo: 'Contacto', component: ContactoPage, icon: 'mail' }

    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  goToPage(page) {
    this.nav.setRoot(page);
    
  }
  
}

