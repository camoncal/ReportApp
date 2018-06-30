import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescripcionDelVehiculoPage } from '../descripcion-del-vehiculo/descripcion-del-vehiculo';
import { ReportesPage } from '../reportes/reportes';
import { AgregarVehiculoPage } from '../agregar-vehiculo/agregar-vehiculo';

@Component({
  selector: 'page-mis-vehiculos',
  templateUrl: 'mis-vehiculos.html'
})
export class MisVehiculosPage {

  constructor(public navCtrl: NavController) {
  }
  goToDescripcionDelVehiculo(params){
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
