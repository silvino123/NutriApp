import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ListacomidasPage} from '../../pages/listacomidas/listacomidas';
import {ComidasRegionalesPage} from '../../pages/comidas-regionales/comidas-regionales';
import {AgregarCPerPage} from '../../pages/agregar-c-per/agregar-c-per';
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'
import { ContactPage } from '../contact/contact';
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
  items=[];
  ref= firebase.database().ref('ComidasPerso/')
  ref2= firebase.database().ref('ComidasHoy/')
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl :AlertController) {
    this.ref.on('value',resp =>{
      this.items= snapshotToArray(resp);
    })
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
  redirecAgregarCPer(){
    this.navCtrl.push(AgregarCPerPage)
  }
  redirecAlimen(item){
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
