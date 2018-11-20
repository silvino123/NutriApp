import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListacomidasPage } from '../../pages/listacomidas/listacomidas';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  redirec(){
   this.navCtrl.push(ListacomidasPage);
  }
}
