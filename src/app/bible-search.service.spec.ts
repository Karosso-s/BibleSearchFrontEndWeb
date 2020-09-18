import { TestBed } from '@angular/core/testing';

import { BibleSearchService } from './bible-search.service';

describe('BibleSearchService', () => {
  let service: BibleSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
