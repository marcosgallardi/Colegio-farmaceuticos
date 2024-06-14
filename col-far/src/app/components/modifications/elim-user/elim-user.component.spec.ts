import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimUserComponent } from './elim-user.component';

describe('ElimUserComponent', () => {
  let component: ElimUserComponent;
  let fixture: ComponentFixture<ElimUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElimUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
