import { TestBed } from '@angular/core/testing';

import { CourseStudentService } from './course-student.service';

describe('CourseStudentService', () => {
  let service: CourseStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
