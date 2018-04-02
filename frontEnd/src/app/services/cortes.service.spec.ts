import { TestBed, inject } from '@angular/core/testing';

import { CortesService } from './cortes.service';

describe('CortesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CortesService]
    });
  });

  it('should be created', inject([CortesService], (service: CortesService) => {
    expect(service).toBeTruthy();
  }));
});
