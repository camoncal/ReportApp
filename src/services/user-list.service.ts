import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserObj } from '../model/user/user.model';

@Injectable()
export class UserListService {

    private userListRef = this.db.list<UserObj>('tbuser');

    constructor(private db: AngularFireDatabase) { }

    getUserList() {
        return this.userListRef;
    }

    getUservalues() {
        return this.userListRef.valueChanges();
    }

    setUser(user: UserObj) {
        return this.db.object(`tbuser/${user.uid}`).set(user);
    }

    getUser(uid: string) {
        return this.db.object(`tbuser/${uid}`).valueChanges();
    }

    addUser(user: UserObj) {
        return this.userListRef.push(user);
    }

    updateUser(user: UserObj) {
        return this.userListRef.update(user.uid, user);
    }

    removeUser(user: UserObj) {
        return this.userListRef.remove(user.key);
    }
}