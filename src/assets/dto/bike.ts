import { UserRent } from '.';

export class BikeDto {
  Id?: string;
  Key?: string;
  color?: string;
  model?: string;
  latitud?: number;
  longitud?: number;
  userBike?: UserRent | null;
  isRented?: boolean;
}
