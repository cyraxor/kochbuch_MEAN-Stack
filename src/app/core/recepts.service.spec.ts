import { TestBed } from '@angular/core/testing';

import { ReceptsService } from './recepts.service';

describe('ReceptsService', () => {
  let service: ReceptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
