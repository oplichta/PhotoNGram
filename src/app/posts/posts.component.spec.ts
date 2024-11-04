import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from '../posts/posts.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PostsService } from '../shared/services/posts.service';
import { Post } from '../shared/models/post';
import { of } from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let postsService: PostsService;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        PostsService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Welcome to PhotoNGram'
    );
  });

  it('should initialize posts$', () => {
    const mockPosts: Post[] = [
      { id: 1, title: 'Post 1', body: 'Body 1', photo: '', userId: 1 },
      { id: 2, title: 'Post 2', body: 'Body 2', photo: '', userId: 1 },
    ];

    spyOn(postsService, 'getPosts').and.returnValue(of(mockPosts));

    component.ngOnInit();

    component.posts$?.subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts[0].photo).toBe('images/cat(0).jpeg');
      expect(posts[1].photo).toBe('images/cat(1).jpeg');
    });
  });
});
