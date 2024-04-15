import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../../core/colegios.service';
import { Colegios } from '../../interfaces/colegios-interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  public colegios$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}
  ngOnInit(): void {
    this.colegios$ = this.service.getColegios();
  }
}
