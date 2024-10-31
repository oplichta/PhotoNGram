export class Comment {
  public id: number;
  public postId: number;
  public name: string;
  public email: string;
  public body: string;
  constructor() {
    this.id = 0;
    this.postId = 0;
    this.name = '';
    this.email = '';
    this.body = '';
  }
}
