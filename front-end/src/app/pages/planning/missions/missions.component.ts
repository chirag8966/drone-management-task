import { Component } from '@angular/core';
import { GoogleMapComponent } from './google-map/google-map.component';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [GoogleMapComponent],
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
  center = { lat: 18.566613521086374, lng: 73.77209687152218 };
  markers = [
    { lat: 18.566613521086374, lng: 73.77209687152218 }
  ];
}
