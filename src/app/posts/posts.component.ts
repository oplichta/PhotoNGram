import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, CommentsComponent, LikesComponent, PhotosComponent, MatInputModule, MatFormFieldModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  public posts$?: Observable<Post[]>;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts().pipe(
      tap((response: Post[]) => {
        response.slice(0, 22).forEach((post, index) => {
          post.photo = 'images/cat(' + index + ').jpeg';
        });
      }),
      map((response: Post[]) => response.slice(0, 22))
    );
  }
}
