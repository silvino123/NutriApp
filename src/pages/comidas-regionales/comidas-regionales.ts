import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ListacomidasPage} from '../../pages/listacomidas/listacomidas';
import {ComidasPersonalizadasPage} from '../../pages/comidas-personalizadas/comidas-personalizadas'
import {AgregarCRegPage} from '../../pages/agregar-c-reg/agregar-c-reg'
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'
import { ContactPage } from '../contact/contact';
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
  items=[];
  ref= firebase.database().ref('ComidasRegio/')
  ref2= firebase.database().ref('ComidasHoy/')
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.ref.on('value',resp =>{
      this.items= snapshotToArray(resp);
    })
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
  redirecAgregarCReg(){
    this.navCtrl.push(AgregarCRegPage)
  }
  async redirecAlimen(item){
    let alert = this.alertCtrl.create();
    alert.setTitle('Agregar alimento');
    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Agregar',
      handler: data => {
        
         let newItem=this.ref2.push();
         newItem.set(item)
         this.navCtrl.setRoot(ContactPage);
      }
    });
    alert.present();
  }
}
