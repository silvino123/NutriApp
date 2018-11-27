import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { DatosperfilPage } from '../pages/datosperfil/datosperfil';
import {ListacomidasPage} from '../pages/listacomidas/listacomidas';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDlF6F3iK37ppeyNdElQZJ6CRikTD_AKos",
  authDomain: "nutriapp-53274.firebaseapp.com",
  databaseURL: "https://nutriapp-53274.firebaseio.com",
  projectId: "nutriapp-53274",
  storageBucket: "nutriapp-53274.appspot.com",
  messagingSenderId: "378709123753"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    DatosperfilPage,
    ListacomidasPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   
    AngularFireModule.initializeApp(config),
    
    AngularFireAuthModule,
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrarPage,
    DatosperfilPage,
    ListacomidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
