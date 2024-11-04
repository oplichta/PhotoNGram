import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommentsComponent, BrowserAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: MatBottomSheetRef, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update comments', () => {
    component.allComments = [
      { id: 1, body: 'Comment 1', name: 'User 1', email: 'user1@example.com', postId: 1 },
      { id: 2, body: 'Comment 2', name: 'User 2', email: 'user2@example.com', postId: 1 },
      { id: 3, body: 'Comment 3', name: 'User 3', email: 'user3@example.com', postId: 1 }
    ];
    component.showAllComments = false;
    component.updateComments();
    component.comments$?.subscribe(comments => {
      expect(comments.length).toBe(2); // Expect 2 comments when showAllComments is false
    });
  
    component.showAllComments = true;
    component.updateComments();
    component.comments$?.subscribe(comments => {
      expect(comments.length).toBe(3); // Expect all comments when showAllComments is true
    });
  });

  it('should toggle comments visibility', () => {
    component.showAllComments = false;
    component.toggleComments();
    expect(component.showAllComments).toBeTrue();
    component.toggleComments();
    expect(component.showAllComments).toBeFalse();
  });

  it('should add a new comment', () => {
    component.comment.body = 'New comment';
    component.allComments = [];
    component.addComment();
    expect(component.allComments.length).toBe(1);
    expect(component.allComments[0].body).toBe('New comment');
    expect(component.allComments[0].name).toBe('New user');
    expect(component.comment.body).toBe('');
  });
});
