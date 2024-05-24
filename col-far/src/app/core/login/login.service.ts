import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interface';
import { server } from '../../helpers/endpoints/server';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  // async getUser(currentUser: { name: string; password: string }): Promise<User> {
  //   const access = await fetch(`${server}`);
  //   return (await access.json()) ?? false;
  // if (
  //   currentUser.name === access.name &&
  //   currentUser.password === access.password
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
  // }
  getUser(currentUser: { name: string; password: string }) {
    const user = {
      id: 1,
      name: 'Marcos Gallardi',
      password: '1234',
    };
    if (
      currentUser.name === user.name &&
      currentUser.password === user.password
    ) {
      return true;
    } else {
      return false;
    }
  }
}
