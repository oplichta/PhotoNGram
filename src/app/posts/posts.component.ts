import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { Post } from './shared/post.namespace';
import { PostsService } from './shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts$: Observable<Post[]>;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts().pipe(
      tap((response: Post[]) =>
        response.forEach((post, index) => {
          if (index < 19) {
            post.Photo = './assets/images/cat (' + index + ').jpeg';
          }
        })
      )
    );
  }
}
