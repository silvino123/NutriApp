import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ContactPage} from '../../pages/contact/contact'
import {AlimentosPage} from '../../pages/alimentos/alimentos';
import {AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'

//import { map } from 'rxjs/operator/map';

/**
 * Generated class for the ListacomidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacomidas',
  templateUrl: 'listacomidas.html',
})
export class ListacomidasPage {
 public Nombre="Manzana";
 public Descripcion="Fruta";
 alimentoRef: AngularFireList<any>;
 alimento: any;
 public Tipo= "Desayuno";
  items=[];
  ref= firebase.database().ref('Alimentos/')
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    // this.alimentoRef = this.afDatabase.list('Alimentos');
    // this.alimento = this.alimentoRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
   this.ref.on('value',resp =>{
     this.items= snapshotToArray(resp);
   })
  }

  ionViewWillLoad(){
    
    
   }

  redirecAlimen(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Detalles del alimento');
    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Agregar',
      handler: data => {
        
         this.Nombre= this.Nombre;
         this.Descripcion= this.Descripcion;
         this.Tipo= this.Tipo;
         this.navCtrl.setRoot(ContactPage,{Nombre:this.Nombre,Descripcion:this.Descripcion,Tipo:this.Tipo})
         
      }
    });
    alert.present();
  }
  redirecAlimentos(){
  this.navCtrl.push(AlimentosPage);
  }
}
