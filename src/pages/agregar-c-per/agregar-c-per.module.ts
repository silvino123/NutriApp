import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarCPerPage } from './agregar-c-per';

@NgModule({
  declarations: [
    AgregarCPerPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarCPerPage),
  ],
})
export class AgregarCPerPageModule {}
