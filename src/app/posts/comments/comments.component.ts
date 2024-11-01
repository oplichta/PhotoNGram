import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../../shared/comment';
import { CommentsService } from '../shared/comments.service';
import { map, Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() postId = 0;

  public comments$?: Observable<Comment[]>;
  public allComments: Comment[] = [];
  public showAllComments = false;
  public comment = new Comment();

  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getCommentsForPost(this.postId).subscribe((comments: Comment[]) => {
      this.allComments = comments;
      this.updateComments();
    });
  }

  updateComments(): void {
    this.comments$ = new Observable<Comment[]>((observer) => {
      observer.next(this.showAllComments ? this.allComments : this.allComments.slice(0, 2));
      observer.complete();
    });
  }

  toggleComments(): void {
    this.showAllComments = !this.showAllComments;
    this.updateComments();
  }

  addComment(): void {
    if (this.comment.body.trim()) {
      this.allComments.unshift({ ...this.comment });
      this.comment.body = '';
      this.updateComments();
    }
  }
}