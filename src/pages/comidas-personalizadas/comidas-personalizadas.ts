import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ListacomidasPage} from '../../pages/listacomidas/listacomidas';
import {ComidasRegionalesPage} from '../../pages/comidas-regionales/comidas-regionales';
import {AgregarCPerPage} from '../../pages/agregar-c-per/agregar-c-per';
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'
import { ContactPage } from '../contact/contact';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database';
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
  ref:any;
  ref2= firebase.database().ref('ComidasHoy/')
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl :AlertController,private afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase) {
    
    this.afAuth.authState.take(1).subscribe(data =>{
      
       this.ref= firebase.database().ref(`ComidasPerso/${data.uid}`)
      // this.DatosDieta= this.afDatabase.object(`Dieta/${data.uid}`).valueChanges(); 
      this.ref.on('value',resp =>{
        this.items= snapshotToArray(resp);
        
      })
   
      
    })
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data =>{
      
      this.ref= firebase.database().ref(`ComidasPerso/${data.uid}`)
     // this.DatosDieta= this.afDatabase.object(`Dieta/${data.uid}`).valueChanges(); 
     this.ref.on('value',resp =>{
       this.items= snapshotToArray(resp);
       
     })
  
     
   })
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
        this.afAuth.authState.take(1).subscribe(d =>{
         
          this.afDatabase.list(`ComidasHoy/${d.uid}`).push(item)
        
         this.navCtrl.setRoot(ContactPage);
      
          })
        //  let newItem=this.ref2.push();
        //  newItem.set(item)
        //  this.navCtrl.setRoot(ContactPage);
      }
    });
    alert.present();

  }
}
