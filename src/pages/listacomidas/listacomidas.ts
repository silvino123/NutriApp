import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ContactPage} from '../../pages/contact/contact'
import {AlimentosPage} from '../../pages/alimentos/alimentos';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
//import { Alimento } from '../../app/models/perfil';
import {Observable} from 'rxjs/observable';
import { Alimento } from '../../app/models/perfil';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private afDatabase:AngularFireDatabase) {
    // this.alimentoRef = this.afDatabase.list('Alimentos');
    // this.alimento = this.alimentoRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
   
  }

  ionViewWillLoad(){
   
    this.alimento= this.afDatabase.list(`Alimentos/`).snapshotChanges().pipe(); 
    
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
