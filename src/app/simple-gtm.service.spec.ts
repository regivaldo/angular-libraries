import { TestBed } from '@angular/core/testing';

import { SimpleGtmService } from './simple-gtm.service';

describe('SimpleGtmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleGtmService = TestBed.get(SimpleGtmService);
    expect(service).toBeTruthy();
  });
});
