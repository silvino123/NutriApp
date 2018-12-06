import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComidasRegionalesPage } from './comidas-regionales';

@NgModule({
  declarations: [
    ComidasRegionalesPage,
  ],
  imports: [
    IonicPageModule.forChild(ComidasRegionalesPage),
  ],
})
export class ComidasRegionalesPageModule {}
