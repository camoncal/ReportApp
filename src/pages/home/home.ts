import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { User } from '../../modulos/user';
import { InicioPage } from '../inicio/inicio';
import { UserListService } from '../../services/user-list.service';
import { UserObj } from '../../model/user/user.model';
import { AngularFireModule } from 'angularfire2';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;

  user = {} as User;

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

  private userg : any;
  
  constructor(public navCtrl: NavController,  
    public events: Events,
    private afAuth: AngularFireAuth, 
    private fb: Facebook, 
    private platform: Platform,
    private toast: ToastController,
    private db: AngularFireModule,
    private localstorage: LocalStorageService,
    private userListService: UserListService) {
      afAuth.authState.subscribe((user: firebase.User) => {
        //debugger;
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
            this.userf.correo = data.email;
            this.userf.uid = data.uid;
            this.userf.name = data.displayName;
            localStorage.setItem("users", this.userf.uid);
            // this.getUser(data.uid);
            this.getUser(data.uid).subscribe(user => {
              if(!user) 
                this.setUser(this.userf);
          })//.then(user=> this.userg);
            // debugger;
            //this.userg = this.db.database.object(`tbuser/${data.uid}`);
            
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

  // addUser(userf: UserObj) {
  //   this.userListService.addUser(userf).then(ref => {
  //     // this.navCtrl.setRoot(DatabasePage);
  //   })}

  setUser(userf: UserObj) {
    this.userListService.setUser(userf).then(ref => {
    })}

  getUser(uid:string) {
    return this.userListService.getUser(uid)//.then(ref => { })}//(user=> this.userg)
  }
  
  setuid(uid)
  {
    debugger;
    this.localstorage.setUsers(uid)
    
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
