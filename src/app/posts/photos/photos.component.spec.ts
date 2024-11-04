import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { By } from '@angular/platform-browser';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PhotosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    component.source = 'https://example.com/photo.jpg'; // Set the source input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the image with the correct src', () => {
    const imgElement = fixture.debugElement.query(By.css('img.image')).nativeElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toBe('https://example.com/photo.jpg');
  });
});