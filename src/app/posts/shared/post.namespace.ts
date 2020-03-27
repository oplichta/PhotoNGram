export class Post {
  public Id: number;
  public UserId: number;
  public Title: string;
  public Body: string;
  constructor() {
    this.Id = 0;
    this.UserId = 0;
    this.Title = '';
    this.Body = '';
  }
}
