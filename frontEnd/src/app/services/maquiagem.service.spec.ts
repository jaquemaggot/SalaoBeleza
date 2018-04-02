import { TestBed, inject } from '@angular/core/testing';

import { MaquiagemService } from './maquiagem.service';

describe('MaquiagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaquiagemService]
    });
  });

  it('should be created', inject([MaquiagemService], (service: MaquiagemService) => {
    expect(service).toBeTruthy();
  }));
});
