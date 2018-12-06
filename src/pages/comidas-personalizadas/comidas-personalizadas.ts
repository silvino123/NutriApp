import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListacomidasPage} from '../../pages/listacomidas/listacomidas';
import {ComidasRegionalesPage} from '../../pages/comidas-regionales/comidas-regionales';

/**
 * Generated class for the ComidasPersonalizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comidas-personalizadas',
  templateUrl: 'comidas-personalizadas.html',
})
export class ComidasPersonalizadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidasPersonalizadasPage');
  }

  redirAlimen(){
    this.navCtrl.push(ListacomidasPage)
  }
  redirComidasReg(){
    this.navCtrl.push(ComidasRegionalesPage)
  }
}
