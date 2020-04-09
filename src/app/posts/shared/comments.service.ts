import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment.namespace';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  public commentAPI = 'https://simpleexpressapi.herokuapp.com/';
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<Comment[]>(this.commentAPI + 'comment');
  }

  setComments(comment) {
    console.log(comment);
    return this.http.post<Comment[]>(this.commentAPI + 'comment', comment);
  }
}
