import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TweenMax } from 'gsap';
import { Observable } from 'rxjs';
import { Colegios } from '../../interfaces/colegios-interface';
import { ColegiosService } from '../../core/colegios.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css',
})
export class DatosComponent implements OnInit {
  @ViewChild('datosContainer', { static: true }) datosContainer!: ElementRef;
  isVisible: boolean = false;

  public colegio$!: Observable<Colegios>;
  constructor(private service: ColegiosService) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.datosContainer.nativeElement);
    this.colegio$ = this.service.getColegios();
  }

  animateNumbers(): void {
    const items =
      this.datosContainer.nativeElement.querySelectorAll('.item-dato h4');
    items.forEach((item: HTMLElement, index: number) => {
      const finalValue = parseInt(item.innerText.trim(), 10);
      item.innerText = '0';

      TweenMax.to(item, 4, {
        delay: index * 0.5,
        textContent: finalValue.toString(),
        roundProps: 'textContent',
        ease: 'Power1.easeOut',
      });
    });
  }
}
