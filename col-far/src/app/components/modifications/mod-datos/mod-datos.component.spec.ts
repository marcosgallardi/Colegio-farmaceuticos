import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModDatosComponent } from './mod-datos.component';

describe('ModDatosComponent', () => {
  let component: ModDatosComponent;
  let fixture: ComponentFixture<ModDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
