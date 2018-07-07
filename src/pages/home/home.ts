import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { User } from '../../modulos/user';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;

  user = {} as User;

  
  constructor(public navCtrl: NavController, 
    private afAuth: AngularFireAuth, 
    private fb: Facebook, 
    private platform: Platform) {
      afAuth.authState.subscribe((user: firebase.User) => {
        if (!user) {
          this.displayName = "no se puede entrar";
          return;
        }
        //this.displayName = user.displayName;
      this.navCtrl.setRoot(InicioPage);
      });
  }

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      if (result){
      this.navCtrl.setRoot(InicioPage);
      }
      else{
        console.log("Datos de autenticacion errados...");
      }
    }
    catch(e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push('RegistroPage');
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
    // this.afAuth.auth
    //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //   .then(res => console.log(res));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
