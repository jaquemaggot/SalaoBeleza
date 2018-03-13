import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAgDepilacaoComponent } from './nova-ag-depilacao.component';

describe('NovaAgDepilacaoComponent', () => {
  let component: NovaAgDepilacaoComponent;
  let fixture: ComponentFixture<NovaAgDepilacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAgDepilacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAgDepilacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
