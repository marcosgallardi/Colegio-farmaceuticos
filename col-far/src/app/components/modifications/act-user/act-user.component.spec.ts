import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActUserComponent } from './act-user.component';

describe('ActUserComponent', () => {
  let component: ActUserComponent;
  let fixture: ComponentFixture<ActUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
