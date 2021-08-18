import { TestBed } from '@angular/core/testing';

import { AlbumDataService } from './album-data.service';

describe('AlbumDataService', () => {
  let service: AlbumDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
