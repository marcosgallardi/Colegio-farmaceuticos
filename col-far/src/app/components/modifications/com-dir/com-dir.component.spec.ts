import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDirComponent } from './com-dir.component';

describe('ComDirComponent', () => {
  let component: ComDirComponent;
  let fixture: ComponentFixture<ComDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
