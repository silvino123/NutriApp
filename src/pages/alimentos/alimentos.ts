import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Alimento} from '../../app/models/perfil'
import {AngularFireDatabase} from 'angularfire2/database'
import{ ListacomidasPage } from '../../pages/listacomidas/listacomidas'
/**
 * Generated class for the AlimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentos',
  templateUrl: 'alimentos.html',
})
export class AlimentosPage {
  alimento ={} as Alimento;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentosPage');
  }
  Agregar(){
    this.afDatabase.list(`Alimentos/`).push(this.alimento)
    this.navCtrl.push(ListacomidasPage)
 }
   
}  