import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { MisVehiculosPage } from '../pages/mis-vehiculos/mis-vehiculos';
import { DescripcionDelVehiculoPage } from '../pages/descripcion-del-vehiculo/descripcion-del-vehiculo';
import { ReportesPage } from '../pages/reportes/reportes';
import { AgregarVehiculoPage } from '../pages/agregar-vehiculo/agregar-vehiculo';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ReportarRoboPage } from '../pages/reportar-robo/reportar-robo';
import { RealizarReportePage } from '../pages/realizar-reporte/realizar-reporte';
import { BotonDePanicoPage } from '../pages/boton-de-panico/boton-de-panico';


import { HomePage } from '../pages/home/home';
import { Logout } from '../pages/logout/logout';
import { InicioPage } from '../pages/inicio/inicio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToMisVehiculos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MisVehiculosPage);
  }goToDescripcionDelVehiculo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DescripcionDelVehiculoPage);
  }goToReportes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportesPage);
  }goToAgregarVehiculo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgregarVehiculoPage);
  }goToAdministracion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AdministracionPage);
  }goToReportarRobo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportarRoboPage);
  }goToRealizarReporte(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RealizarReportePage);
  }goToBotonDePanico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BotonDePanicoPage);
  }logoutApp(){ ///<-- call from static button
    //this.Logout.presentConfirm(); ///<-- call 
    //this.Logout
    this.events.publish('user:logout');
  }
}
