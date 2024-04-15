import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server1 } from '../helpers/endpoints/server';
import { Observable } from 'rxjs';
import { Novedades } from '../interfaces/novedades-interface';

@Injectable({
  providedIn: 'root',
})
export class NovedadesService {
  constructor() {}
  async getNovedades(): Promise<Novedades[]> {
    const data = await fetch(`${server1}/0`);
    console.log(data);
    return (await data.json()) ?? [];
  }
}
