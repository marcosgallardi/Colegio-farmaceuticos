import { Component, OnInit } from '@angular/core';
import { ButtonMainComponent } from '../button-main/button-main.component';
import { ButtonInterface } from '../../interfaces/button-interface';
import { ColegiosService } from '../../core/colegios.service';
import { Colegios } from '../../interfaces/colegios-interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ButtonMainComponent, AsyncPipe],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent implements OnInit {
  public colegio$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}

  ngOnInit(): void {
    this.colegio$ = this.service.getColegios();
  }
  textButtons1: ButtonInterface = {
    text: 'Conocenos',
  };
  textButtons2: ButtonInterface = {
    text: 'Comisión directiva',
    variant: true,
  };
}
