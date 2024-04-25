import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmTurnosPagesComponent } from './farm-turnos-pages.component';

describe('FarmTurnosPagesComponent', () => {
  let component: FarmTurnosPagesComponent;
  let fixture: ComponentFixture<FarmTurnosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmTurnosPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmTurnosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
