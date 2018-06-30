import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MisVehiculosPage } from '../mis-vehiculos/mis-vehiculos';
import { DescripcionDelVehiculoPage } from '../descripcion-del-vehiculo/descripcion-del-vehiculo';
import { ReportesPage } from '../reportes/reportes';
import { AgregarVehiculoPage } from '../agregar-vehiculo/agregar-vehiculo';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToMisVehiculos(params){
    if (!params) params = {};
    this.navCtrl.push(MisVehiculosPage);
  }goToDescripcionDelVehiculo(params){
    if (!params) params = {};
    this.navCtrl.push(DescripcionDelVehiculoPage);
  }goToReportes(params){
    if (!params) params = {};
    this.navCtrl.push(ReportesPage);
  }goToAgregarVehiculo(params){
    if (!params) params = {};
    this.navCtrl.push(AgregarVehiculoPage);
  }
}
