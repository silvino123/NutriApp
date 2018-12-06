import { Component } from '@angular/core';
import { NavController, MenuController} from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database';
//import {Perfil} from'../../app/models/perfil'
//import { Observable } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 
})
export class HomePage {
  perfilDatos:any;
  kcal:any;
  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,private menu:MenuController) {
    menu.enable(true);
  }
  ionViewWillLoad(){
   this.afAuth.authState.take(1).subscribe(data =>{
     if(data && data.email&&data.uid){
      this.perfilDatos= this.afDatabase.object(`Perfil/${data.uid}`).valueChanges(); 
      console.log(this.perfilDatos)
      
     }
     
   })

  }

}
