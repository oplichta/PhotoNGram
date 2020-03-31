import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment.namespace';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comment = new Comment();
  constructor() {}

  ngOnInit(): void {}
}
