import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraService } from '../../services/camera.service';
import { UserListService } from '../../services/user-list.service';
import { Observable } from 'rxjs/Observable';
import { UserObj } from '../../model/user/user.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  item: Observable<UserObj[]>;
  uid: string;

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

      // this.items = this.userListService.getUservalues()
      this.uid = localStorage.getItem("users");
      
      this.userListService.getUser(this.uid).subscribe((user: UserObj) => {
        debugger;
        
        this.userf = user;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCarPage');
    // this.userf = this.navParams.get('user');
  }
  tomarFoto()
  {
    this.cameraService.tomarFoto()
  }

  
}
