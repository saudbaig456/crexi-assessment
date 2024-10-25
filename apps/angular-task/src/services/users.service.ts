import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {

    private readonly httpClient = inject(HttpClient);

    getUsers (): Observable<Array<User>> {

        return this.httpClient
        .get<User[]>('https://jsonplaceholder.typicode.com/users');

    }

}
