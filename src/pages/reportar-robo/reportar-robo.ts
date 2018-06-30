import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RealizarReportePage } from '../realizar-reporte/realizar-reporte';

@Component({
  selector: 'page-reportar-robo',
  templateUrl: 'reportar-robo.html'
})
export class ReportarRoboPage {

  constructor(public navCtrl: NavController) {
  }
  goToRealizarReporte(params){
    if (!params) params = {};
    this.navCtrl.push(RealizarReportePage);
  }
}
