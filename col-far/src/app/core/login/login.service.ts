import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interface';
import { server } from '../../helpers/endpoints/server';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUser(currentUser: { name: string; password: string }) {
    return this.http.post<User>(`${server}`, currentUser).pipe(
      map((data: User) => {
        return data;
      })
    );
  }
  storeToken(token: string) {
    localStorage.setItem('token', token);
  }
}
