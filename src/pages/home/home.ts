import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

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
    public events: Events,
    private afAuth: AngularFireAuth, 
    private fb: Facebook, 
    private platform: Platform,
    private toast: ToastController) {
      afAuth.authState.subscribe((user: firebase.User) => {
        debugger;
        if (!user) {
          //this.navCtrl.setRoot(HomePage);
          this.toast.create({
            message: `Sesion cerrada`,
            duration: 3000
          }).present();
          return;
        }
        else{
          this.afAuth.authState.subscribe(data => {
            console.log(data);
            this.toast.create({
              message: `Bienvenido, ${data.email}`,
              duration: 3000
            }).present();
          });
          this.navCtrl.setRoot(InicioPage);
        }        
      });
      events.subscribe('user:logout', () => {
        afAuth.auth.signOut();
        //debugger;
        // user and time are the same arguments passed in `events.publish(user, time)`
        console.log('logout');
        this.navCtrl.setRoot(HomePage);
      });
      events.subscribe('user:login', (usuario) => {
        debugger;
        this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        //debugger;
        // user and time are the same arguments passed in `events.publish(user, time)`
        console.log('login');
        this.navCtrl.setRoot(InicioPage);
      });
  }

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      if (result){
        //this.navCtrl.setRoot(InicioPage);
        //this.displayName = user.email;
      }
      else{
        //console.log("Datos de autenticacion errados...");
        this.displayName = "no se puede entrar";
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

  signOut(){
    this.events.publish('user:logout');
  }
    
}
