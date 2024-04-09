import { Component, OnInit } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';
import { Colegios } from '../../interfaces/colegios-interface';
import { ColegiosService } from '../../core/colegios.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonMainComponent, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  public colegio$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}
  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
  }
  button: ButtonInterface = {
    text: 'Farmacias de',
    span: 'Turno',
    icon: true,
  };
}
