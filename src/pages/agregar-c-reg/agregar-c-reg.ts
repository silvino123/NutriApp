import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ComidaPer} from '../../app/models/perfil'
import {AngularFireDatabase} from 'angularfire2/database'
import{ ComidasRegionalesPage } from '../../pages/comidas-regionales/comidas-regionales'
/**
 * Generated class for the AgregarCRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-c-reg',
  templateUrl: 'agregar-c-reg.html',
})
export class AgregarCRegPage {
  ComidaReg ={} as ComidaPer;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarCRegPage');
  }
  Agregar(){
    this.afDatabase.list(`ComidasRegio/`).push(this.ComidaReg)
    this.navCtrl.push(ComidasRegionalesPage)
 }
}
