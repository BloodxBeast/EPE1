import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscuelasPage } from './escuelas';

@NgModule({
  declarations: [
    EscuelasPage,
  ],
  imports: [
    IonicPageModule.forChild(EscuelasPage),
  ],
})
export class EscuelasPageModule {}
