import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportesPage } from '../reportes/reportes';

@Component({
  selector: 'page-descripcion-del-vehiculo',
  templateUrl: 'descripcion-del-vehiculo.html'
})
export class DescripcionDelVehiculoPage {

  constructor(public navCtrl: NavController) {
  }
  goToReportes(params){
    if (!params) params = {};
    this.navCtrl.push(ReportesPage);
  }
}
