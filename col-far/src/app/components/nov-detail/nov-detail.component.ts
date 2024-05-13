import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HistorialNavService } from '../../core/historialNav/historial-nav.service';

@Component({
  selector: 'app-nov-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nov-detail.component.html',
  styleUrls: ['./nov-detail.component.css'],
})
export class NovDetailComponent implements OnInit {
  parametro: string = '';
  novDetailData: any = {};

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private HistorialNavService: HistorialNavService
  ) {
    let id: string = '';
    activatedRouter.params.subscribe(({ id: idData }) => {
      id = idData;
    });
    this.parametro = id;
    /* this.parametro =decodeURI(id);*/
  }

  ngOnInit(): void {}

  volverAtras() {
    this.router.navigate(['/novedades']);
    console.log(this.router);
  }
}
