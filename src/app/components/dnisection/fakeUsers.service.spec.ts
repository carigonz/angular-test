import { TestBed } from '@angular/core/testing';

import { FakeUsersService } from './fakeUsers.service';

describe('FakeusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeUsersService = TestBed.get(FakeUsersService);
    expect(service).toBeTruthy();
  });
});
