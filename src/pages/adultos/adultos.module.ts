import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdultosPage } from './adultos';

@NgModule({
  declarations: [
    AdultosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdultosPage),
  ],
})
export class AdultosPageModule {}
