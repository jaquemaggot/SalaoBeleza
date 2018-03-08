import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMaquiagemComponent } from './nova-maquiagem.component';

describe('NovaMaquiagemComponent', () => {
  let component: NovaMaquiagemComponent;
  let fixture: ComponentFixture<NovaMaquiagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaMaquiagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMaquiagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
