import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server } from '../helpers/endpoints/server';
import { Colegios } from '../interfaces/colegios-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColegiosService {
  constructor(private http: HttpClient) {}
  getColegios(): Observable<Colegios> {
    return this.http.get<Colegios>(`${server}/0`);
  }
}
