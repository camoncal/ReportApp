import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserObj } from '../model/user/user.model';
import { storage } from 'firebase';

@Injectable()
export class CameraService {

    constructor(private db: AngularFireDatabase, private camera: Camera) { }

    async tomarFoto(){
        try {
          const options: CameraOptions = {
            quality: 50,
            targetHeight: 600,
            targetWidth: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
      
          const result = await this.camera.getPicture(options);
    
          const image = `data:image/jpeg;base64,${result}`;
    
          const pictures = storage().ref('pictures');
          pictures.putString(image, 'data_url');
        } catch (e) {
          console.error(e);
        }
        
      }


}
