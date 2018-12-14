import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from 'angularfire2/database'
import {TabsPage } from '../../pages/tabs/tabs';

import {Perfil} from'../../app/models/perfil'


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
perfil = {} as Perfil;

contador:number;
actividadFisica:number;
al:number;
pes:number;
ed:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth,public loadingCtrl: LoadingController,private afDatabase:AngularFireDatabase) {
  }

  Enviar(){
   
    console.log(this.perfil)
    // if(this.perfil.sexo="Femenino"){
    //    this.KcalMujer();
       
    // }
    this.afAuth.authState.take(1).subscribe( auth =>{
    if(this.perfil.sexo.toString()=="Masculino"){
       this.al= this.perfil.altura;
       this.pes=this.perfil.peso;
       this.ed=this.perfil.edad;
       console.log(this.perfil.sexo)
       console.log(this.perfil.peso.valueOf())
       console.log(this.al)
      if(this.perfil.nivel.toString()=="Sedentario"){
        this.actividadFisica=1.2
     }
     if(this.perfil.nivel.toString()=="Poco Activo"){
       this.actividadFisica=1.375
    }
    if(this.perfil.nivel.toString()=="Medianamente"){
      this.actividadFisica=1.55
   }
   if(this.perfil.nivel.toString()=="Muy Activo"){
    this.actividadFisica=1.725
 }
    this.contador = (66.473 ) + (13.751 * this.pes ) + ( 5.0033 * this.al) - (6.7550 * this.ed);
    //this.contador=13.751 + this.pes;
    this.perfil.kcal= this.contador * this.actividadFisica;
    this.perfil.kcal=this.perfil.kcal.toFixed(2)
    this.perfil.imc = (this.pes /(this.al*this.al)) * 10000;
    this.perfil.imc=this.perfil.imc.toFixed(2)
    this.perfil.grasa=1.2*this.perfil.imc+0.23*this.ed-10.8*1-5.4;
    this.perfil.grasa=this.perfil.grasa.toFixed(2)
    this.perfil.agua=2000;
    console.log(this.contador)
    console.log(this.perfil.kcal)
    console.log(this.perfil.grasa)
    console.log(this.perfil.imc)
     this.afDatabase.object(`Perfil/${auth.uid}`).set(this.perfil).then(()=> 
   
      this.navCtrl.setRoot(TabsPage))
      //this.KcalHombre();
      const loader = this.loadingCtrl.create({
    content: "Enviando...",
    duration: 800
  });
  loader.present(); 
  

     
   }
   if(this.perfil.sexo.toString()=="Femenino"){
    this.al= this.perfil.altura;
    this.pes=this.perfil.peso;
    this.ed=this.perfil.edad;
    console.log(this.perfil.sexo)
    console.log(this.perfil.peso.valueOf())
    console.log(this.al)
   if(this.perfil.nivel.toString()=="Sedentario"){
     this.actividadFisica=1.2
  }
  if(this.perfil.nivel.toString()=="Poco Activo"){
    this.actividadFisica=1.375
 }
 if(this.perfil.nivel.toString()=="Medianamente"){
   this.actividadFisica=1.55
}
if(this.perfil.nivel.toString()=="Muy Activo"){
 this.actividadFisica=1.725
}
 this.contador = (655.1 ) + (9.463 * this.pes ) + ( 1.8 * this.al) - (4.6756 * this.ed);
 //this.contador=13.751 + this.pes;
 this.perfil.kcal= this.contador * this.actividadFisica;
 this.perfil.kcal=this.perfil.kcal.toFixed(2)
 this.perfil.imc= (this.pes / (this.al * this.al)) * 10000;
 this.perfil.imc=this.perfil.imc.toFixed(2)
 this.perfil.grasa=1.2*this.perfil.imc+0.23*this.ed-10.8*1-5.4;
 this.perfil.grasa=this.perfil.grasa.toFixed(2)
 this.perfil.agua=2000;
 console.log(this.contador)
 console.log(this.perfil.kcal)
 console.log(this.perfil.grasa)
 console.log(this.perfil.imc)
  this.afDatabase.object(`Perfil/${auth.uid}`).set(this.perfil).then(()=> 

   this.navCtrl.setRoot(TabsPage))
   //this.KcalHombre();
   const loader = this.loadingCtrl.create({
 content: "Enviando...",
 duration: 800
});
loader.present(); 


  
}
    }) 
  
 
  }
  KcalMujer(){
    if(this.perfil.nivel=="Sedentario"){
       this.actividadFisica=1.2
    }
    if(this.perfil.nivel=="Poco Activo"){
      this.actividadFisica=1.375
   }
     this.contador=665.1+(9.463+this.perfil.peso)+(1.8*this.perfil.altura)-(4.6756*this.perfil.edad);
     this.perfil.kcal= this.contador*this.actividadFisica;
  }
  KcalHombre(){
    if(this.perfil.nivel=="Sedentario"){
      this.actividadFisica=1.2
   }
   if(this.perfil.nivel=="Poco Activo"){
     this.actividadFisica=1.375
  }
    this.contador=66.473+(13.751 +this.perfil.peso)+(5.0033*this.perfil.altura)-(6.7550*this.perfil.edad);
    this.perfil.kcal= this.contador*this.actividadFisica;
    this.afAuth.authState.take(1).subscribe( auth =>{
      this.afDatabase.object(`Perfil/${auth.uid}`).set(this.perfil).then(()=> 
   
      this.navCtrl.setRoot(TabsPage))
    })
    
  }
}
