import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public dieta:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

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
        // this.testRadioOpen = false;
         this.dieta = data;
      }
    });
    alert.present();
  }

}
