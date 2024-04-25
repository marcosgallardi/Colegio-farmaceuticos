import { Component, Input } from '@angular/core';
import { ButtonInterface } from '../../interfaces/button-interface';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-button-main',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css',
})
export class ButtonMainComponent {
  @Input() text: ButtonInterface = {
    text: 'Inicio',
    span: 'Inicio',
    icon: false,
    variant: false,
  };
}
