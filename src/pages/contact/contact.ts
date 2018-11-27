import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ListacomidasPage } from '../../pages/listacomidas/listacomidas';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public Nombre:string;
  public Descripcion:string;
  public Tipo:string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.Nombre = navParams.get('Nombre');
    this.Descripcion = navParams.get('Descripcion');
    this.Tipo = navParams.get('Tipo');
  }
  redirec(){
   this.navCtrl.push(ListacomidasPage);
  }
}
