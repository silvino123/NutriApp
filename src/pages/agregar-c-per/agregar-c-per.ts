import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ComidaPer} from '../../app/models/perfil'
import {AngularFireDatabase} from 'angularfire2/database'
import{ ComidasPersonalizadasPage } from '../../pages/comidas-personalizadas/comidas-personalizadas'
/**
 * Generated class for the AgregarCPerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-c-per',
  templateUrl: 'agregar-c-per.html',
})
export class AgregarCPerPage {
  ComidaP ={} as ComidaPer;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarCPerPage');
  }
  Agregar(){
    this.afDatabase.list(`ComidasPerso/`).push(this.ComidaP)
    this.navCtrl.push(ComidasPersonalizadasPage)
 }
}
