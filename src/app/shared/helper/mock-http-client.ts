import { Observable, of } from 'rxjs';

export class MockHttpClient {
    get(url: string) {
        return of({ 'apiRoot': 'mock/api/root' });
    }
    put(url: string) {
        return this.actionSave('updated');
    }
    post(url: string) {
        return this.actionSave('saved');
    }
    delete(url: string) {
        return this.actionSave('deleted');
    }
    actionSave(param: string): Observable<() => void> {
        return of(() => {
            console.log(param);
        });
    }
}
