import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgMaquiagemComponent } from './ag-maquiagem.component';

describe('AgMaquiagemComponent', () => {
  let component: AgMaquiagemComponent;
  let fixture: ComponentFixture<AgMaquiagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgMaquiagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgMaquiagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
