import { Component } from '@angular/core';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { RoverFormComponent } from './rover-form/rover-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mars Rover';
}
