import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDepilacaoComponent } from './nova-depilacao.component';

describe('NovaDepilacaoComponent', () => {
  let component: NovaDepilacaoComponent;
  let fixture: ComponentFixture<NovaDepilacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaDepilacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaDepilacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
