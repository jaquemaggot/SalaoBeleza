import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDepilacaoComponent } from './ag-depilacao.component';

describe('AgDepilacaoComponent', () => {
  let component: AgDepilacaoComponent;
  let fixture: ComponentFixture<AgDepilacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDepilacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDepilacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
