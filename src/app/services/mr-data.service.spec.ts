import { TestBed } from '@angular/core/testing';

import { MRDataService } from './mr-data.service';

describe('MRDataService', () => {
  let service: MRDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MRDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
