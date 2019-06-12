import { TestBed } from '@angular/core/testing';

import { EasilyGtmService } from './easily-gtm.service';

describe('EasilyGtmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EasilyGtmService = TestBed.get(EasilyGtmService);
    expect(service).toBeTruthy();
  });
});
