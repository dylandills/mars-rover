import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MarsRoverAPIPhotos } from './../mars-rover-api-photos.service';
import { PhotoService } from './../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverAPIPhotos, PhotoService]
})
export class RoverFormComponent implements OnInit {
  photos: any[] = null;
  noPhotos: boolean = false;

  constructor(
    private router: Router,
    private marsAPI: MarsRoverAPIPhotos
  ) {}

  getRoverImages(date: string, camera: string): void {
    this.noPhotos = false;
    this.marsAPI.getByDateAndCamera(date, camera).subscribe(data => {
      if (data.json().photos.length) {
        this.photos = data.json();
      }
      else this.noPhotos = true;
    });
  }

  saveRoverImages(date, camera) {
    this.marsAPI.saveImages(date, camera);
    alert("The images from" + date + " taken by the " + camera + " camera have saved to the database.")
  }

  ngOnInit() {
  }

}
