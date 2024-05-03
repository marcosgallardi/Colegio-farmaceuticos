import { TestBed } from '@angular/core/testing';

import { HistorialNavService } from './historial-nav.service';

describe('HistorialNavService', () => {
  let service: HistorialNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
