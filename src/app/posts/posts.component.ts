import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.namespace';
import { PostsService } from './shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res;
      this.posts.map(
        (post, index) =>
          (post.Photo = './assets/images/cat (' + index + ').jpeg')
      );
    });
  }
}
