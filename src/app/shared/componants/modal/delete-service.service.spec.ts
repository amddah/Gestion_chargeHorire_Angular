import { TestBed } from '@angular/core/testing';

import { DeleteServiceService } from './delete-service.service';

describe('DeleteServiceService', () => {
  let service: DeleteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
