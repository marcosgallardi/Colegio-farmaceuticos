import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colegios } from '../../interfaces/colegios-interface';
import { ColegiosService } from '../../core/colegios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public colegio$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}
  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
  }
}
