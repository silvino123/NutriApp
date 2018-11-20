import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage } from '../../pages/tabs/tabs';
/**
 * Generated class for the DatosperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datosperfil',
  templateUrl: 'datosperfil.html',
})
export class DatosperfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Enviar(){
  this.navCtrl.setRoot(TabsPage);
  }

}
