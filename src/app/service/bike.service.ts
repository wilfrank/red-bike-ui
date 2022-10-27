import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BikeDto } from '../../assets/dto';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) {}
  new = (newBike: BikeDto): Observable<BikeDto> => {
    const bike = this.http.post<BikeDto>(`${env.apiUrlBase}/bike/New`, newBike);
    return bike;
  };
  update = (bike: BikeDto): Observable<BikeDto> => {
    const bikePromise = this.http.put<BikeDto>(
      `${env.apiUrlBase}/bike/update`,
      bike
    );
    return bikePromise;
  };
  delete = (bike: BikeDto): Observable<BikeDto> => {
    return this.http.put<BikeDto>(`${env.apiUrlBase}/Bike/Delete`, bike);
  };
  getAll = (userKey?: string): Observable<BikeDto[]> => {
    const bikes = this.http.get<BikeDto[]>(
      `${env.apiUrlBase}/bike/GetAll/${userKey}`
    );
    return bikes;
  };
  getByUser = (userKey?: string): Observable<BikeDto[]> => {
    const bikes = this.http.get<BikeDto[]>(
      `${env.apiUrlBase}/bike/ByUser/${userKey}`
    );
    return bikes;
  };
}
