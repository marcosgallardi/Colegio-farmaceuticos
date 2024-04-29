import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosFarmComponent } from './turnos-farm.component';

describe('TurnosFarmComponent', () => {
  let component: TurnosFarmComponent;
  let fixture: ComponentFixture<TurnosFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosFarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurnosFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
