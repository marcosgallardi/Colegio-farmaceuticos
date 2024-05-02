import { Component, OnInit } from '@angular/core';
import { NovDetailComponent } from '../../components/nov-detail/nov-detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nov-detail-page',
  standalone: true,
  imports: [NovDetailComponent],
  templateUrl: './nov-detail-page.component.html',
  styleUrl: './nov-detail-page.component.css',
})
export class NovDetailPageComponent implements OnInit {
  novedadId: number = 0;
  constructor(private activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      this.novedadId = parseInt(params.get('id') || '0');
    });
  }
}
