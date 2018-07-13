import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Car } from '../model/car/car.model';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()
export class CarListService {

    private carListRef = this.db.list<Car>('tbcarro');

    constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }

    getCarList() {
        return this.carListRef;
    }

    getCarListKey(key) {
        return this.db.object<Car>(`tbreport/${key}`);
    }

    getCarvalues() {
        return this.carListRef.valueChanges();
    }

    addCar(car: Car) {
        return this.carListRef.push(car).key;
        //return this.db.child().push({}).key;
    }

    updateCar(car: Car) {
        return this.carListRef.update(car.key, car);
    }

    removeCar(car: Car) {
        return this.carListRef.remove(car.key);
    }

    
}