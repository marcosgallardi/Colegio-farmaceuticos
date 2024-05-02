import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovDetailPageComponent } from './nov-detail-page.component';

describe('NovDetailPageComponent', () => {
  let component: NovDetailPageComponent;
  let fixture: ComponentFixture<NovDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
