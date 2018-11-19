import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { RegistrarPage} from '../../pages/registrar/registrar';
import {TabsPage} from '../../pages/tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Registrarse(){
    this.navCtrl.push(RegistrarPage)
  }

  login(){
    this.navCtrl.setRoot(TabsPage)
  }
 
    
}
