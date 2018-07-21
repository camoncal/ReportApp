import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
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

  user: UserObj = {
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
    private toast: ToastController,
    public navParams: NavParams) {

      // this.items = this.userListService.getUservalues()
      this.uid = localStorage.getItem("users");
      
      this.userListService.getUser(this.uid).subscribe((user: UserObj) => {
        debugger;
        
        this.user = user;
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

  updateUser(user: UserObj) {
    this.userListService.updateUser(user).then(() => {
      this.toast.create({
            message: `User Updated`,
            duration: 3000
          }).present();
      this.navCtrl.setRoot(PerfilPage);
    })
  }
  
}
