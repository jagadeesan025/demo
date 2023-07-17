import { TestBed } from '@angular/core/testing';

import { NeService } from './ne.service';

describe('NeService', () => {
  let service: NeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
