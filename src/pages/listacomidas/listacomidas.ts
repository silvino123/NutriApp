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
  items2: any;
  ref= firebase.database().ref('Alimentos/')
  bandera:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    // this.alimentoRef = this.afDatabase.list('Alimentos');
    // this.alimento = this.alimentoRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
   this.ref.on('value',resp =>{
     this.items= snapshotToArray(resp);
   })
   //this.initializeItems();
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
  buascar(){
   this.bandera=true;
  }
  initializeItems(){
    this.ref.on('value',resp =>{
      this.items= snapshotToArray(resp);
    })
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
