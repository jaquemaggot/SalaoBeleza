import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteDiaComponent } from './corte-dia.component';

describe('CorteDiaComponent', () => {
  let component: CorteDiaComponent;
  let fixture: ComponentFixture<CorteDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
