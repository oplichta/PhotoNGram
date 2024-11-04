export class Post {
    public id: number;
    public userId: number;
    public title: string;
    public body: string;
    public photo: string;
    constructor() {
      this.id = 0;
      this.userId = 0;
      this.title = '';
      this.body = '';
      this.photo = '';
    }
  }