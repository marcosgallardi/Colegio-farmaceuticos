import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colegios } from '../../interfaces/colegios-interface';
import { ColegiosService } from '../../core/colegios.service';
import { LoginService } from '../../core/login/login.service';
import { User } from '../../interfaces/user-interface';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public colegio$!: Observable<Colegios>;

  public loginForm!: FormGroup;

  constructor(
    private service: ColegiosService,

    private LoginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    // const { name, password } = this.loginForm.value;
    // this.LoginService.getUser({ name, password }).subscribe(
    //   (data) => {
    //     this.LoginService.storeToken(data.token);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   (error: any) => {
    //     throw error;
    //   }
    // );
    this.router.navigate(['/dashboard']);
  }
}
