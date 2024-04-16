import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalPageComponent } from './institucional-page.component';

describe('InstitucionalPageComponent', () => {
  let component: InstitucionalPageComponent;
  let fixture: ComponentFixture<InstitucionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitucionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
