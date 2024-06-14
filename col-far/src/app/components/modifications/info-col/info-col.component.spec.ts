import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColComponent } from './info-col.component';

describe('InfoColComponent', () => {
  let component: InfoColComponent;
  let fixture: ComponentFixture<InfoColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoColComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
