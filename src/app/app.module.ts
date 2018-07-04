import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PerfilPage } from '../pages/perfil/perfil';
import { InicioPage } from '../pages/inicio/inicio';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ReportarRoboPage } from '../pages/reportar-robo/reportar-robo';
import { BotonDePanicoPage } from '../pages/boton-de-panico/boton-de-panico';
import { MisVehiculosPage } from '../pages/mis-vehiculos/mis-vehiculos';
import { DescripcionDelVehiculoPage } from '../pages/descripcion-del-vehiculo/descripcion-del-vehiculo';
import { AgregarVehiculoPage } from '../pages/agregar-vehiculo/agregar-vehiculo';
import { ReportesPage } from '../pages/reportes/reportes';
import { RealizarReportePage } from '../pages/realizar-reporte/realizar-reporte';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';

export const firebaseConfig = {
  apiKey: "AIzaSyDy8bVCMlDcZe6x7LjuUjODD4B9fn6yh7I",
    authDomain: "reportapp-9ff47.firebaseapp.com",
    databaseURL: "https://reportapp-9ff47.firebaseio.com/",
    projectId: "reportapp-9ff47",
    storageBucket: "reportapp-9ff47.appspot.com",
    messagingSenderId: "696262787114"
};

@NgModule({
  declarations: [
    MyApp,
    PerfilPage,
    InicioPage,
    AdministracionPage,
    ReportarRoboPage,
    BotonDePanicoPage,
    MisVehiculosPage,
    DescripcionDelVehiculoPage,
    AgregarVehiculoPage,
    ReportesPage,
    RealizarReportePage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerfilPage,
    InicioPage,
    AdministracionPage,
    ReportarRoboPage,
    BotonDePanicoPage,
    MisVehiculosPage,
    DescripcionDelVehiculoPage,
    AgregarVehiculoPage,
    ReportesPage,
    RealizarReportePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}