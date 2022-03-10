import { TestBed } from '@angular/core/testing';

import { CategororyService } from './categorory.service';

describe('CategororyService', () => {
  let service: CategororyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategororyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
