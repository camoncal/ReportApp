import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Rob } from '../model/rob/rob.model';

@Injectable()
export class RobListService {

    private robListRef = this.db.list<Rob>('tbreport');

    constructor(private db: AngularFireDatabase) { }

    getRobList() {
        return this.robListRef;
    }

    getRobvalues() {
        return this.robListRef.valueChanges();
    }

    addRob(rob: Rob) {
        return this.robListRef.push(rob);
    }

    updateRob(rob: Rob) {
        return this.robListRef.update(rob.key, rob);
    }

    removeRob(rob: Rob) {
        return this.robListRef.remove(rob.key);
    }
}