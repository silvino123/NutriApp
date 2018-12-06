import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController } from 'ionic-angular';
//import {TabsPage} from '../../pages/tabs/tabs';
import { AngularFireAuth} from '@angular/fire/auth';
import {DatosperfilPage} from '../../pages/datosperfil/datosperfil';
/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  email:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public  aAuth:AngularFireAuth,public toastCtrl:ToastController) {
  }

  Registrar(){
    try{
      const result= this.aAuth.auth.createUserWithEmailAndPassword(this.email,this.password)
      if(result){
      const loader = this.loadingCtrl.create({
      content: "Conectando...",
      duration: 1000
    });
    loader.present();
    this.navCtrl.setRoot(DatosperfilPage)
      }
    
    }

    catch(e){
      const toast = this.toastCtrl.create({
        message: "Campos requeridos |contraseña debe ser mayor a 6 caracteres",
        duration: 3000
      });
      toast.present();

    }
    
  
   
  }


}
