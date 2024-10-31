import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../../shared/comment';
import { CommentsService } from '../shared/comments.service';
import { map, Observable, take } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comments$?: Observable<Comment[]>;
  public comment = new Comment();
  constructor(public commentsService: CommentsService) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments().pipe(
      map((response: Comment[]) => response.slice(0, 5))
    );
  }
  addComment(comment: Comment) {
    console.log(comment);
    this.commentsService.setComments(comment);
  }
}
