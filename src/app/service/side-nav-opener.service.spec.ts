import { TestBed } from '@angular/core/testing';

import { SideNavOpenerService } from './side-nav-opener.service';

describe('SideNavOpenerService', () => {
  let service: SideNavOpenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavOpenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
