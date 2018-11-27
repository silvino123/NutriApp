import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database'
import {TabsPage } from '../../pages/tabs/tabs';

import {perfil} from'../../app/models/perfil'
/**
 * Generated class for the DatosperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datosperfil',
  templateUrl: 'datosperfil.html',
})
export class DatosperfilPage {
 
 perfil= {} as perfil;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase) {
  }

  Enviar(){
    this.afAuth.authState.take(1).subscribe( auth =>{
   this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil).then(() => this.navCtrl.setRoot(TabsPage))
    })
 // this.navCtrl.setRoot(TabsPage);
  }

}
