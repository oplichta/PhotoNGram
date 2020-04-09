import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment.namespace';
import { CommentsService } from '../shared/comments.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comments$: Observable<Comment[]>;
  public comment = new Comment();
  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments();
  }
  addComment(comment: Comment) {
    console.log(comment);
    this.commentsService.setComments(comment);
  }
}
