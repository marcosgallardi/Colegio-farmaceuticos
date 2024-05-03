import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HistorialNavService } from '../../core/historialNav/historial-nav.service';

@Component({
  selector: 'app-nov-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nov-detail.component.html',
  styleUrl: './nov-detail.component.css',
})
export class NovDetailComponent implements OnInit {
  router = RouterModule;
  constructor(private HistorialNavService: HistorialNavService) {}
  ngOnInit(): void {
    this.HistorialNavService.agregarPagina(this.router.url);
  }
  volverAnterior() {
    const urlAnterior = this.HistorialNavService.obtenerAnterior();
    if (urlAnterior) {
      this.router.navigateByUrl(urlAnterior);
    }
  }
}
