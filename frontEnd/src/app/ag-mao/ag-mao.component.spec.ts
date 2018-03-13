import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgMaoComponent } from './ag-mao.component';

describe('AgMaoComponent', () => {
  let component: AgMaoComponent;
  let fixture: ComponentFixture<AgMaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgMaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgMaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
