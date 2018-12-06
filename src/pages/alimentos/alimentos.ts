import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Alimento} from '../../app/models/perfil'
import {AngularFireDatabase} from 'angularfire2/database'
import{ ListacomidasPage } from '../../pages/listacomidas/listacomidas'
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'
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
  items=[];
  items2: any;
  ref= firebase.database().ref('Alimentos/')
  constructor(public navCtrl: NavController, public navParams: NavParams,private afDatabase:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.ref.on('value',resp =>{
      this.items= snapshotToArray(resp);
    })
  }
  Agregar(){
    this.afDatabase.list(`Alimentos/`).push(this.alimento)
    this.navCtrl.push(ListacomidasPage)
 }
   
}  