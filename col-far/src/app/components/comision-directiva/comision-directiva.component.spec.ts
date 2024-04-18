import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionDirectivaComponent } from './comision-directiva.component';

describe('ComisionDirectivaComponent', () => {
  let component: ComisionDirectivaComponent;
  let fixture: ComponentFixture<ComisionDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComisionDirectivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComisionDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
