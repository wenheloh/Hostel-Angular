import { TestBed, inject } from '@angular/core/testing';

import { HostelService } from './hostel.service';

describe('HostelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostelService]
    });
  });

  it('should be created', inject([HostelService], (service: HostelService) => {
    expect(service).toBeTruthy();
  }));
});
