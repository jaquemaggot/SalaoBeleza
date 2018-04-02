import { TestBed, inject } from '@angular/core/testing';

import { ManicureService } from './manicure.service';

describe('ManicureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManicureService]
    });
  });

  it('should be created', inject([ManicureService], (service: ManicureService) => {
    expect(service).toBeTruthy();
  }));
});
