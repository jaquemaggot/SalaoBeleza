import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAgCabeloComponent } from './novo-ag-cabelo.component';

describe('NovoAgCabeloComponent', () => {
  let component: NovoAgCabeloComponent;
  let fixture: ComponentFixture<NovoAgCabeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAgCabeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAgCabeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
