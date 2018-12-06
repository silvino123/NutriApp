import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListacomidasPage} from '../../pages/listacomidas/listacomidas';
import {ComidasPersonalizadasPage} from '../../pages/comidas-personalizadas/comidas-personalizadas'
/**
 * Generated class for the ComidasRegionalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comidas-regionales',
  templateUrl: 'comidas-regionales.html',
})
export class ComidasRegionalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidasRegionalesPage');
  }
  redirAlimen(){
    this.navCtrl.push(ListacomidasPage)
  }
  redirComidasPer(){
    this.navCtrl.push(ComidasPersonalizadasPage)

  }
}
