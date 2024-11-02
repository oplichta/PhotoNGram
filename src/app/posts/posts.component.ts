import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, take, tap } from 'rxjs';
import { Post } from '../shared/post';
import { PostsService } from '../shared/posts.service';
import { CommentsComponent } from './comments/comments.component';
import { LikesComponent } from './likes/likes.component';
import { PhotosComponent } from './photos/photos.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet'; 
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, CommentsComponent, LikesComponent, PhotosComponent, MatInputModule, MatFormFieldModule, MatBottomSheetModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MatBottomSheetRef, useValue: {} }
    ]
})
export class PostsComponent implements OnInit {
  public posts$?: Observable<Post[]>;
  public isMobile = false;
  constructor(private postsService: PostsService,  private bottomSheet: MatBottomSheet,
     private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isMobile = result.matches;
      console.log('ddddddd',this.isMobile);
    });
  }

 
  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts().pipe(
      tap((response: Post[]) => {
        response.slice(0, 22).forEach((post, index) => {
          post.photo = './images/cat(' + index + ').jpeg';
        });
      }),
      map((response: Post[]) => response.slice(0, 22))
    );
  }

  openCommentsSheetHandler(postId: number): void {
    this.bottomSheet.open(CommentsComponent, {
      data: { postId, isBottomSheet: true },
    });
  }
}
