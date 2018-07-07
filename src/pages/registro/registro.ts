import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../modulos/user';
import { AngularFireAuth } from "angularfire2/auth"
import { async } from 'rxjs/internal/scheduler/async';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
    const result =  await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

}
