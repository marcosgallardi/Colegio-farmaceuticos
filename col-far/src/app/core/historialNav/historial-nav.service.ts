import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistorialNavService {
  private historial: string[] = [];
  agregarPagina(url: string) {
    this.historial.push(url);
  }
  obtenerAnterior(): string | undefined {
    if (this.historial.length > 1) {
      return this.historial.pop();
    } else {
      return undefined;
    }
  }
  constructor() {}
}
