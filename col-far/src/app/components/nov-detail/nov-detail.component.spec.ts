import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovDetailComponent } from './nov-detail.component';

describe('NovDetailComponent', () => {
  let component: NovDetailComponent;
  let fixture: ComponentFixture<NovDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
