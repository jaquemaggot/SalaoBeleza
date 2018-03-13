import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCorteComponent } from './novo-corte.component';

describe('NovoCorteComponent', () => {
  let component: NovoCorteComponent;
  let fixture: ComponentFixture<NovoCorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
