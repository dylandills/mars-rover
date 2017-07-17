import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-photos-list',
  templateUrl: './user-photos-list.component.html',
  styleUrls: ['./user-photos-list.component.css'],
  providers: [PhotoService]
})
export class UserPhotosListComponent implements OnInit {
  savedPhotos: FirebaseListObservable<any[]>;

  constructor(
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.savedPhotos = this.photoService.getPhotos();
  }

  deletePhoto(selectedPhoto: any):  void {
    this.photoService.deletePhoto(selectedPhoto);
    alert('The selected photo has been deleted.')
  }

}
