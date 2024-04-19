import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFarmaciasComponent } from './tabla-farmacias.component';

describe('TablaFarmaciasComponent', () => {
  let component: TablaFarmaciasComponent;
  let fixture: ComponentFixture<TablaFarmaciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaFarmaciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaFarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
