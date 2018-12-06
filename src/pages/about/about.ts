import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { Dieta } from '../../app/models/perfil';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //public dieta:string;
  public comida:number;
  perfilDatos:any;
  dieta = {} as Dieta;
  DatosDieta:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private afAuth:AngularFireAuth,private afDatabase:AngularFireDatabase) {

  }
  ionViewWillLoad(){
    this.afAuth.authState.take(1).subscribe(data =>{
      if(data && data.email&&data.uid){
       this.perfilDatos= this.afDatabase.object(`Perfil/${data.uid}`).valueChanges(); 
       console.log(this.perfilDatos)
       this.DatosDieta= this.afDatabase.object(`Dieta/${data.uid}`).valueChanges(); 
      }
      
    })
 
   }
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecciona un tipo de dieta');

    alert.addInput({
      type: 'radio',
      label: 'Equilibrada',
      value: 'Equilibrada',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Moderada',
      value: 'Moderada',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Fitness',
      value: 'Fitness',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Baja en grasas',
      value: 'Baja en grasas',
      checked: false
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if(data=="Equilibrada"){
           this.dieta.nombre="Equilibrada"
          this.dieta.car=50;
          this.dieta.pro=25;
          this.dieta.gra=25;
          this.dieta.carxdia=260;
          this.dieta.proxdia=130;
          this.dieta.graxdia=56;
          this.afAuth.authState.take(1).subscribe( auth =>{
            this.afDatabase.object(`Dieta/${auth.uid}`).set(this.dieta)
          }) 
        }
        if(data=="Moderada"){
          this.dieta.nombre="Moderada"
         this.dieta.car=55;
         this.dieta.pro=25;
         this.dieta.gra=20;
         this.dieta.carxdia=286;
         this.dieta.proxdia=130;
         this.dieta.graxdia=46;
         this.afAuth.authState.take(1).subscribe( auth =>{
           this.afDatabase.object(`Dieta/${auth.uid}`).set(this.dieta)
         }) 
       }
       if(data=="Fitness"){
        this.dieta.nombre="Fitness"
       this.dieta.car=50;
       this.dieta.pro=30;
       this.dieta.gra=20;
       this.dieta.carxdia=260;
       this.dieta.proxdia=150;
       this.dieta.graxdia=46;
       this.afAuth.authState.take(1).subscribe( auth =>{
         this.afDatabase.object(`Dieta/${auth.uid}`).set(this.dieta)
       }) 
     }
     if(data=="Baja en grasas"){
      this.dieta.nombre="Baja en grasas"
     this.dieta.car=60;
     this.dieta.pro=25;
     this.dieta.gra=15;
     this.dieta.carxdia=312;
     this.dieta.proxdia=130;
     this.dieta.graxdia=35;
     this.afAuth.authState.take(1).subscribe( auth =>{
       this.afDatabase.object(`Dieta/${auth.uid}`).set(this.dieta)
     }) 
   }
      }
      
    });
    alert.present();
  }
  showRadio2() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecciona un numero de comidas');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '2',
      value: '2',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '3',
      value: '3',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '5',
      value: '5',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '6',
      value: '6',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '7',
      value: '7',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '8',
      value: '8',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '9',
      value: '9',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '10',
      value: '10',
      checked: false
    });


    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
         this.comida = data;
      }
    });
    alert.present();
  }

}
