import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;

  displayName;

  constructor(public navCtrl: NavController, 
    afDB: AngularFireDatabase,
    private afAuth: AngularFireAuth, 
    private fb: Facebook, 
    private platform: Platform) {
      afAuth.authState.subscribe((user: firebase.User) => {
        if (!user) {
          this.displayName = null;
          return;
        }
        this.displayName = user.displayName;      
      });
    // this.items = afDB.list('data-prueba2').valueChanges();
    // afAuth.authState.subscribe(user => {
    //   if (!user) {
    //     this.displayName = null;        
    //     return;
    //   }
    //   this.displayName = user.displayName;      
    // });
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
