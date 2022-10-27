import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BikeDto, UserDto } from '../../assets/dto';
import { MapComponent } from '../map/map.component';
import { UserService } from '../service';
import { BikeService } from '../service/bike.service';
import { MngBikeComponent } from './mng-bike/mng-bike.component';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
})
export class BikeComponent implements OnInit {
  user?: UserDto;
  bikes: BikeDto[] = [];
  displayedColumns: string[] = ['id', 'color', 'model', 'lat', 'delete'];
  constructor(
    readonly userService: UserService,
    readonly bikeService: BikeService,
    readonly router: Router,
    private dialog: MatDialog
  ) {
    this.user = this.userService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.loadBikes();
  }
  onLogOut = (isLogOut: boolean) => {
    if (isLogOut) {
      this.userService.logOut();
      this.router.navigate(['/home']);
    }
  };
  openNewBike = () => {
    const dialogRef = this.dialog.open(MngBikeComponent, {
      data: {
        message: 'new bike creating',
        id: null,
      },
    });
    dialogRef.afterClosed().subscribe((response: BikeDto) => {
      this.loadBikes();
    });
  };
  showPosition = (bike: BikeDto) => {
    const dialogRefMap = this.dialog.open(MapComponent, {
      data: bike,
    });
    dialogRefMap.afterClosed().subscribe((response: BikeDto) => {});
  };
  edit = (bike: BikeDto) => {
    const dialogRef = this.dialog.open(MngBikeComponent, {
      data: {
        message: 'new bike creating',
        key: bike.Key,
        bike: bike,
      },
    });
    dialogRef.afterClosed().subscribe((response: BikeDto) => {});
  };
  loadBikes = () => {
    this.bikeService.getAll(this.user?.id).subscribe((bks: BikeDto[]) => {
      this.bikes = bks;
    });
  };
  delete = (bike: BikeDto) => {
    this.bikeService.delete(bike).subscribe((r) => {
      this.loadBikes();
    });
  };

  releaseBike = (bike: BikeDto) => {
    let bikeToRelease = { ...bike } as BikeDto;
    bikeToRelease.isRented = false;
    bikeToRelease.userBike = null;
    this.bikeService.update(bikeToRelease).subscribe(() => {
      this.loadBikes();
    });
  };
  rentBike = (bike: BikeDto) => {
    let bikeToRent = { ...bike } as BikeDto;
    bikeToRent.isRented = true;
    bikeToRent.userBike = {
      name: this.user?.name,
      userKey: this.user?.id,
      created: new Date(),
    };
    this.bikeService.update(bikeToRent).subscribe(() => {
      this.loadBikes();
    });
  };
}
