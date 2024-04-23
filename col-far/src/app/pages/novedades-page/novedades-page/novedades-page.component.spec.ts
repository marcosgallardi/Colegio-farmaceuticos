import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesPageComponent } from './novedades-page.component';

describe('NovedadesPageComponent', () => {
  let component: NovedadesPageComponent;
  let fixture: ComponentFixture<NovedadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovedadesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovedadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
