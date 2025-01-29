import { Component, AfterViewInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MapPage implements AfterViewInit {
  map: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap() {
    this.map = L.map('map').setView([51.505, -0.09], 13); // Default to London

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    L.marker([51.505, -0.09])
      .addTo(this.map)
      .bindPopup('Hello! This is OpenStreetMap.')
      .openPopup();
  }
}

