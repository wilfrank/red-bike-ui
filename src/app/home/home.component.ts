import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import { BikeDto, UserDto } from '../../assets/dto';
import { LoginComponent } from '../login/login.component';
import { SignInComponent } from '../login/sign-in/sign-in.component';
import { UserService } from '../service';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  removeMarketsFromMap() {
    for (const element of this.markets) {
      this.map.removeLayer(element);
    }
  }
  user?: UserDto;
  private map: any;
  bikes: BikeDto[] = [];
  markets: L.Marker[] = [];
  constructor(
    private dialog: MatDialog,
    readonly userService: UserService,
    readonly bikeService: BikeService
  ) {
    this.user = this.userService.getCurrentUser();
    if (this.user) {
      this.setBikes();
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap = (): void => {
    this.map = L.map('map', {
      center: [6.230833, -75.590553],
      zoom: 8,
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

  ngOnInit(): void {}

  openLoginDialog = () => {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((response: UserDto) => {
      this.user = response;
      this.userService.setCurrentUser(this.user);
      this.setBikes();
    });
  };

  setBikes = () => {
    this.bikeService.getByUser(this.user?.id).subscribe(
      (bikes: BikeDto[]) => {
        this.bikes = bikes;
        this.setMarketToMap();
      },
      (err) => {
        window.alert('No bicicletas');
      }
    );
  };
  setMarketToMap = () => {
    if (this.bikes.length > 0) {
      this.bikes.forEach((bike) => {
        const marker = L.marker([bike?.latitud ?? 0, bike?.longitud ?? 0]);
        this.markets.push(marker);
        marker.addTo(this.map);
      });
    }
  };
  onLogOut = (isLogOut: boolean) => {
    if (isLogOut) {
      this.userService.logOut();
      this.bikes = [];
      this.removeMarketsFromMap();
      this.user = undefined;
    }
  };

  onLogIn = (toLogIn: boolean) => {
    if (toLogIn) {
      this.openLoginDialog();
    }
  };

  signInHere = () => {
    const dialogRef = this.dialog.open(SignInComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((response: UserDto) => {
      this.user = response;
    });
  };
}
