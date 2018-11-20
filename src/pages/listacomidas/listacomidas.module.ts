import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListacomidasPage } from './listacomidas';

@NgModule({
  declarations: [
    ListacomidasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListacomidasPage),
  ],
})
export class ListacomidasPageModule {}
