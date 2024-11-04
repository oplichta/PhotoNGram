import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comment } from '../../shared/models/comment';
import { CommentsService } from '../../shared/services/comments.service';
import { map, Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconButton,
    MatIcon,
  ],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() postId = 0;
  @Input() isMobile = false;
  @Output() openCommentsSheet = new EventEmitter<number>();

  public comments$?: Observable<Comment[]>;
  public allComments: Comment[] = [];
  public showAllComments = false;
  public comment = new Comment();
  public isBottomSheet = false;

  constructor(
    public commentsService: CommentsService,
    private _bottomSheetRef: MatBottomSheetRef<CommentsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { postId: number; isBottomSheet: boolean }
  ) {}

  ngOnInit(): void {
    if (this.data?.postId) this.postId = this.data.postId;
    if (this.data?.isBottomSheet) {
       this.isBottomSheet = this.data.isBottomSheet;
    this.showAllComments = true;
    }
     
    this.commentsService
      .getCommentsForPost(this.postId)
      .subscribe((comments: Comment[]) => {
        this.allComments = comments;
        this.updateComments();
      });
  }

  updateComments(): void {
    this.comments$ = new Observable<Comment[]>((observer) => {
      observer.next(
        this.showAllComments ? this.allComments : this.allComments.slice(0, 2)
      );
      observer.complete();
    });
  }

  toggleComments(): void {
    this.showAllComments = !this.showAllComments;
    this.updateComments();
  }

  addComment(): void {
    if (this.comment.body.trim()) {
      this.comment.name = 'New user';
      this.allComments.unshift({ ...this.comment });
      this.comment.body = '';
      this.updateComments();
    }
  }

  closeBottomSheet(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openCommentsSheetHandler(postId: number): void {
    this.openCommentsSheet.emit(postId);
  }
}
