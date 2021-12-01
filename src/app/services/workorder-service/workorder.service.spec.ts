import { TestBed } from '@angular/core/testing';

import { WorkorderService } from './workorder.service';

describe('WorkorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkorderService = TestBed.get(WorkorderService);
    expect(service).toBeTruthy();
  });
});
