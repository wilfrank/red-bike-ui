import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';
import { BikeDto } from '../../assets/dto';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private bike: BikeDto = {};
  initMap = (): void => {
    this.map = L.map('map', {
      center: [6.230833, -75.590553],
      zoom: 15,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: BikeDto,
    private dialogRef: MatDialogRef<MapComponent>
  ) {
    this.bike = { ...data };
  }
  ngAfterViewInit(): void {
    this.initMap();
    const marker = L.marker([
      this.bike?.latitud ?? 0,
      this.bike?.longitud ?? 0,
    ]);
    marker.addTo(this.map);
    this.map.panTo(
      new L.LatLng(this.bike?.latitud ?? 0, this.bike?.longitud ?? 0)
    );
  }

  ngOnInit(): void {}
}
