import { Injectable } from '@angular/core';
import { Photo } from './photo.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PhotoService {
  photos: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
    this.photos = database.list(`photos`);
  }

  getPhotos(): FirebaseListObservable<any[]> {
    return this.photos;
  }

  addPhoto(newPhoto: Photo): void {
    this.photos.push(newPhoto);
  }

  deletePhoto(photoToDelete: any): void {
    this.database.object(`photos/${photoToDelete.$key}`).remove();
  }

  getPhotoById(photoId: string): FirebaseObjectObservable<any> {
    return this.database.object(`photos/${photoId}`);
  }

}
