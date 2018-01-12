import { TestBed, inject } from '@angular/core/testing';

import { WindyService } from './windy.service';

describe('WindyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindyService]
    });
  });

  it('should be created', inject([WindyService], (service: WindyService) => {
    expect(service).toBeTruthy();
  }));
});
