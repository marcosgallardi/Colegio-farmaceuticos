import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colegios } from '../../interfaces/colegios-interface';
import { ColegiosService } from '../../core/colegios.service';
import { LoginService } from '../../core/login/login.service';
import { User } from '../../interfaces/user-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public colegio$!: Observable<Colegios>;
  public login$!: Observable<boolean>;

  user: User = {
    id: 1,
    name: '',
    password: '',
  };

  constructor(
    private service: ColegiosService,
    private services: LoginService
  ) {}
  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
  }
  onLogin(): void {
   const result = this.services.getUser(this.user);
   if(result === true){
    //navegar al dashboard
   }else{
    alert("Datos incorrectos")
   }
  }
}
