import { Component } from '@angular/core';
import { User } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-act-user',
  standalone: true,
  imports: [],
  templateUrl: './act-user.component.html',
  styleUrl: './act-user.component.css',
})
export class ActUserComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Marcos gallardi',
      userName:'pepito',
      password: '123',
      token: '123',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Elvio Lento',
      userName:'pepito',
      password: '1233',
      token: '12334',
      role: 'Superadmin',
    },
    {
      id: 3,
      name: 'Lionel messi',
      userName:'pepito',
      password: '1235',
      token: '1235',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Javier milei',
      userName:'pepito',
      password: '1237',
      token: '1238',
      role: 'Admin',
    },
  ];
  onClickButtons(id: number) {
  

  }
}
