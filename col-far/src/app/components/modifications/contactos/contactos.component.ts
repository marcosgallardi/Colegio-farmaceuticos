import { Component } from '@angular/core';
import { ContactoCompComponent } from '../../contacto-comp/contacto-comp.component';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [ContactoCompComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
})
export class ContactosComponent {}
