import { TestBed } from '@angular/core/testing';

import { FilterStudentService } from './filter-student.service';

describe('FilterStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterStudentService = TestBed.get(FilterStudentService);
    expect(service).toBeTruthy();
  });
});
