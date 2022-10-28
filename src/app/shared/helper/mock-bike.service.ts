import { Observable, of } from "rxjs";
import { BikeDto } from "src/assets/dto";

export class MockBikeService {
    mockBike: BikeDto = {
        color: 'blue',
        Id: 'what-ever',
        isRented: false,
        Key: 'anyway',
        latitud: 0.0,
        longitud: 0.0,
        model: 'montain',
        userBike: undefined
    };
    new = (newBike: BikeDto): Observable<BikeDto> => {
        return of(this.mockBike);
    };
    update = (bike: BikeDto): Observable<BikeDto> => {
        return of(this.mockBike);
    };
    delete = (bike: BikeDto): Observable<BikeDto> => {
        return of(this.mockBike);
    };
    getAll = (userKey?: string): Observable<BikeDto[]> => {
        return of([this.mockBike]);
    };
    getByUser = (userKey?: string): Observable<BikeDto[]> => {
        return of([this.mockBike]);
    };
}