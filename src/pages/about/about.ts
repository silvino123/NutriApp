import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public dieta:string;
  public comida:number;
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
