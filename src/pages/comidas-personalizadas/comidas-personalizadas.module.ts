import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComidasPersonalizadasPage } from './comidas-personalizadas';

@NgModule({
  declarations: [
    ComidasPersonalizadasPage,
  ],
  imports: [
    IonicPageModule.forChild(ComidasPersonalizadasPage),
  ],
})
export class ComidasPersonalizadasPageModule {}
