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
import {AlimentosPage} from '../pages/alimentos/alimentos';
import {ComidasPersonalizadasPage} from '../pages/comidas-personalizadas/comidas-personalizadas';
import {ComidasRegionalesPage} from '../pages/comidas-regionales/comidas-regionales';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBo24LGy9gD8ZPtFPe7FcF0bimlnvXwPPQ",
  authDomain: "nutriapp-9b5e7.firebaseapp.com",
  databaseURL: "https://nutriapp-9b5e7.firebaseio.com",
  projectId: "nutriapp-9b5e7",
  storageBucket: "nutriapp-9b5e7.appspot.com",
  messagingSenderId: "414687246674"
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
    AlimentosPage,
    ComidasPersonalizadasPage,
    ComidasRegionalesPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   
    AngularFireModule.initializeApp(config),
    
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
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
    ListacomidasPage,
    AlimentosPage,
    ComidasPersonalizadasPage,
    ComidasRegionalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
