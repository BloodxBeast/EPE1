import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {GoogleMap,GoogleMaps,GoogleMapsEvent,LatLng} from'@ionic-native/google-maps';
import { PlatformLocation } from '@angular/common';
/**
 * Generated class for the EscuelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escuelas',
  templateUrl: 'escuelas.html',
  providers:[GoogleMaps]
})
export class EscuelasPage {
  
  toggleValue: boolean = false;
  public map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams,public googleMaps:GoogleMaps,private plataform:Platform) {
  }

  change(){
    console.log(this.toggleValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscuelasPage');
    this.plataform.ready().then(()=>{
      this.map=this.googleMaps.create('map');
      this.map.one(GoogleMapsEvent.MAP_READY).then((data:any)=>{
        let myPosition:LatLng=new LatLng(41.390295,2.154007);
        this.map.animateCamera({target:myPosition,zoom: 10})
      })
    }
  )
  }

}