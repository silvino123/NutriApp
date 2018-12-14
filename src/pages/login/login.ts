import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { RegistrarPage} from '../../pages/registrar/registrar';
import {TabsPage} from '../../pages/tabs/tabs';
import { AngularFireAuth} from '@angular/fire/auth';
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
 
   email:string;
   password:string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public aAuth:AngularFireAuth,public toastCtrl: ToastController) {
  }
  Registrarse(){
    this.navCtrl.push(RegistrarPage)
  }

 async login(){
      try{
       const result=  await this.aAuth.auth.signInWithEmailAndPassword(this.email,this.password)
     if(result){
      await this.navCtrl.setRoot(TabsPage)
              }
      }
      catch(e){
       
        const toast = this.toastCtrl.create({
         
          message: "Correo y/o Contraseña invalidos",
          duration: 3000
        });
        toast.present();
      }
   
     
   
     //
  }
  

  }
    

