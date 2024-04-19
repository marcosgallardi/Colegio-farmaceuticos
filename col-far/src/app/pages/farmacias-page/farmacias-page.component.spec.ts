import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciasPageComponent } from './farmacias-page.component';

describe('FarmaciasPageComponent', () => {
  let component: FarmaciasPageComponent;
  let fixture: ComponentFixture<FarmaciasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmaciasPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmaciasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
