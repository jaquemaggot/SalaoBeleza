import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaManicureComponent } from './nova-manicure.component';

describe('NovaManicureComponent', () => {
  let component: NovaManicureComponent;
  let fixture: ComponentFixture<NovaManicureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaManicureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaManicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
