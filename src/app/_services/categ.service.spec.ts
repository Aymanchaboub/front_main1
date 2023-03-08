import { TestBed } from '@angular/core/testing';

import { CategoriesssService } from './categ.service';

describe('TutorialService', () => {
  let service: CategoriesssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});