import { Observable, of } from "rxjs";
import { SignModel, UserDto } from "src/assets/dto";

export class MockAutUser {
    user: UserDto = {
        id: 'what-ever',
        email: 'what@what.com',
        password: 'pass',
        name: 'name',
        error: 'error'
    } as UserDto
    signIn = (user: SignModel): Observable<void> => {
        return of();
    };
    login = (
        email: string,
        password: string
    ): Observable<UserDto> => {
        return of(this.user);
    };
    logOut = () => {
        localStorage.removeItem('user');
    };
    getCurrentUser = (): UserDto | undefined => {
        return this.user;
    };
    setCurrentUser = (user: UserDto): void => {
        { };
    };
}