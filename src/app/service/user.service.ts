import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { UserDto, SignModel } from '../../assets/dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signIn = (user: SignModel): Observable<void> => {
    return this.http.post<void>(`${env.apiUrlBase}/auth/signin`, user);
  };
  login = (
    email: string,
    password: string
  ): Observable<UserDto | undefined> => {
    return this.http.get<UserDto | undefined>(
      `${env.apiUrlBase}/auth/login/${email}/${password}`
    );
  };
  logOut = () => {
    localStorage.removeItem('user');
  };
  getCurrentUser = (): UserDto | undefined => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
      return JSON.parse(user) as UserDto;
    }
    return undefined;
  };
  setCurrentUser = (user: UserDto): void => {
    localStorage.setItem('user', JSON.stringify(user));
  };
}
