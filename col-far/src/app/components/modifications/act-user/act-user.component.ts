import { Component } from '@angular/core';
import { User } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-act-user',
  standalone: true,
  imports: [],
  templateUrl: './act-user.component.html',
  styleUrl: './act-user.component.css'
})
export class ActUserComponent {
  users:User[] =[
    {
      id:1,
      name:"Marcos gallardi",
      password:"123",
      token:"123",
      role:"Admin"
    },
    {
      id:2,
      name:"Elvio Lento",
      password:"1233",
      token:"12334",
      role:"Superadmin"
    },
    {
      id:3,
      name:"Lionel messi",
      password:"1235",
      token:"1235",
      role:"Admin"
    },
    {
      id:4,
      name:"Javier milei",
      password:"1237",
      token:"1238",
      role:"Admin"
    },
  ]
}
