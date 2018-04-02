import { TestBed, inject } from '@angular/core/testing';

import { DepilacaoService } from './depilacao.service';

describe('DepilacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepilacaoService]
    });
  });

  it('should be created', inject([DepilacaoService], (service: DepilacaoService) => {
    expect(service).toBeTruthy();
  }));
});
