import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportesPage } from '../reportes/reportes';

@Component({
  selector: 'page-administracion',
  templateUrl: 'administracion.html'
})
export class AdministracionPage {

  constructor(public navCtrl: NavController) {
  }
  goToReportes(params){
    if (!params) params = {};
    this.navCtrl.push(ReportesPage);
  }
}
