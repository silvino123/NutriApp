import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController,NavParams,App,AlertController } from 'ionic-angular';
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
  caloriasTotales:number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth:AngularFireAuth,
    private afDatabase:AngularFireDatabase,
    private app:App,
    private chRef: ChangeDetectorRef,public alertCtrl:AlertController) {
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
      this.caloriasTotales = 0;
      this.items.forEach(comida=>{
        this.caloriasTotales+=parseInt(comida.caloria);
      })

      this.chRef.detectChanges();
    })
 
   }
  redirec(){
   this.navCtrl.push(ListacomidasPage);
  }
  logout(){
    this.app.getRootNav().setRoot(LoginPage);
    //this.navCtrl.setRoot(LoginPage); 
  }
  async delete(key){
    let alert = this.alertCtrl.create();
    alert.setTitle('Eliminar alimento');
    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Agregar',
      handler: data => {
        firebase.database().ref('ComidasHoy/'+key).remove()
      }
    });
    alert.present();
      
    }
}
