import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LocalStorageService {

  uiduser = this.getUid();
  constructor(){   
  }
 
  getUid() {
    return localStorage.getItem('users')
  }
 
  setUsers(users){
    localStorage.setItem('users', users);
  }
}
