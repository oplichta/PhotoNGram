import { TestBed } from '@angular/core/testing';
import { PhotosService } from '../services/photos.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
