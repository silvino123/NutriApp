import { Component } from '@angular/core';
import { NavController,NavParams,App } from 'ionic-angular';
import {ListacomidasPage } from '../../pages/listacomidas/listacomidas';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import {snapshotToArray} from '../../app/models/perfil'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public Nombre:string;
  public Descripcion:string;
  public Tipo:string;
  perfilDatos:any;
  items=[];
  ref= firebase.database().ref('ComidasHoy/')
  constructor(public navCtrl: NavController,public navParams: NavParams,private afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase,private app:App) {
    this.Nombre = navParams.get('Nombre');
    this.Descripcion = navParams.get('Descripcion');
    this.Tipo = navParams.get('Tipo');
  }
  ionViewWillLoad(){
    this.afAuth.authState.take(1).subscribe(data =>{
      if(data && data.email&&data.uid){
       this.perfilDatos= this.afDatabase.object(`Perfil/${data.uid}`).valueChanges(); 
       console.log(this.perfilDatos)
      // this.DatosDieta= this.afDatabase.object(`Dieta/${data.uid}`).valueChanges(); 
      }
      
    })
    this.ref.on('value',resp =>{
      this.items= snapshotToArray(resp);
    })
 
   }
  redirec(){
   this.navCtrl.push(ListacomidasPage);
  }
  logout(){
    this.app.getRootNav().setRoot(LoginPage);
    //this.navCtrl.setRoot(LoginPage); 
  }
}
