import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { Logout } from '../pages/logout/logout';
import { HomePage } from '../pages/home/home';

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
    AngularFireAuthModule,
    AngularFireStorageModule
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
    Camera,
    Facebook,
    Geolocation,
    Logout,
    {provide: ErrorHandler, useClass: IonicErrorHandler}  ]
})
export class AppModule {}