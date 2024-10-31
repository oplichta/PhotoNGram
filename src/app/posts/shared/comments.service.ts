import { Injectable } from '@angular/core';
import { Comment } from '../../shared/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  public commentAPI = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<Comment[]>(this.commentAPI + 'comments');
  }

  setComments(comment: Comment) {
    console.log(comment);
    return this.http.post<Comment[]>(this.commentAPI + 'comments', comment);
  }
}
