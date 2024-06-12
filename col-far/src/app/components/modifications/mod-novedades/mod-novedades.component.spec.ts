import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModNovedadesComponent } from './mod-novedades.component';

describe('ModNovedadesComponent', () => {
  let component: ModNovedadesComponent;
  let fixture: ComponentFixture<ModNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModNovedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
