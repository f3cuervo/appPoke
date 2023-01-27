import { TestBed } from '@angular/core/testing';

import { GetinfopokeService } from './getinfopoke.service';

describe('GetinfopokeService', () => {
  let service: GetinfopokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinfopokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
