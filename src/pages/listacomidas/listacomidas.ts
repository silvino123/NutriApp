import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ContactPage} from '../../pages/contact/contact'
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
 
 public Tipo= "Desayuno";
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
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

}
