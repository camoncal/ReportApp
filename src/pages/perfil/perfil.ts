import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraService } from '../../services/camera.service';
import { UserListService } from '../../services/user-list.service';
import { Observable } from 'rxjs/Observable';
import { UserObj } from '../../model/user/user.model';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  items: Observable<UserObj[]>;

  userf: UserObj = {
    name: '',
    lastname: '',
    id: '',
    address: '',
    phone: '',
    correo: '',
    dob: '',
    uid: ''
  };
  constructor(public navCtrl: NavController,  private userListService: UserListService,
    private cameraService: CameraService,
    public navParams: NavParams) {

      this.items = this.userListService.getUservalues()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCarPage');
    this.userf = this.navParams.get('user');
  }
  tomarFoto()
  {
    this.cameraService.tomarFoto()
  }
}
