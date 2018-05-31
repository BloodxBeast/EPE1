import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from'firebase';
/**
 * Generated class for the SugerenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sugerencias',
  templateUrl: 'sugerencias.html',
})
export class SugerenciasPage {
  titulo: string = "";
  nombre: string = "";
  comentario: string = "";
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SugerenciasPage');
  }
  enviarSugerencia(){
    var sugerenciaRef = firebase.database().ref().child("sugerencia");
    sugerenciaRef.push({ titulo: this.titulo, nombre: this.nombre, comentario: this.comentario });
    this.comentario="";
    this.titulo="";
    this.nombre="";
  }
}
