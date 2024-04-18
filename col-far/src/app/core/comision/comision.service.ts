import { Injectable } from '@angular/core';
import { Comision } from '../../interfaces/comision-interface';
import { server } from '../../helpers/endpoints/server';

@Injectable({
  providedIn: 'root',
})
export class ComisionService {
  constructor() {}
  async getComisiones(): Promise<Comision[]> {
    const data = await fetch(server);
    return (await data.json()) ?? [];
  }
}
