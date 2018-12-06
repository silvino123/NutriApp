import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { LoginPage } from '../login/login';
//import {Perfil} from'../../app/models/perfil'
//import { Observable } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 
})
export class HomePage {
  perfilDatos:any;
  kcal:any;
  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,public app:App) {
    
  }
  ionViewWillLoad(){
   this.afAuth.authState.take(1).subscribe(data =>{
     if(data && data.email&&data.uid){
      this.perfilDatos= this.afDatabase.object(`Perfil/${data.uid}`).valueChanges(); 
      console.log(this.perfilDatos)
      
     }
     
   })

  }
  logout(){
    this.app.getRootNav().setRoot(LoginPage);
    //this.navCtrl.setRoot(LoginPage); 
  }

}
