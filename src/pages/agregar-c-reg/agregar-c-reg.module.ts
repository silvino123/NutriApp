import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarCRegPage } from './agregar-c-reg';

@NgModule({
  declarations: [
    AgregarCRegPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarCRegPage),
  ],
})
export class AgregarCRegPageModule {}
