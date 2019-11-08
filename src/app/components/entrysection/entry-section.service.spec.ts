import { TestBed } from '@angular/core/testing';

import { EntrySectionService } from './entry-section.service';

describe('EntrySectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntrySectionService = TestBed.get(EntrySectionService);
    expect(service).toBeTruthy();
  });
});
