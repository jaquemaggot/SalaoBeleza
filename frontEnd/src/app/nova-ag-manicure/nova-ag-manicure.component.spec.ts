import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAgManicureComponent } from './nova-ag-manicure.component';

describe('NovaAgManicureComponent', () => {
  let component: NovaAgManicureComponent;
  let fixture: ComponentFixture<NovaAgManicureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAgManicureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAgManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
