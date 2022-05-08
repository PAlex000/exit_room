import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from "../../shared/models/User";
import {Comment} from "../../shared/models/Comment";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommentService} from "../../shared/services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {
  user?: User;

  comments: Array<Comment> = [];

  commentsForm = this.createForm({
    id: '',
    username: '',
    comment: '',
    date: 0
  });

  constructor(private fb: FormBuilder, private router: Router, private commentService: CommentService,) {
  }

  ngOnChanges(): void {
    this.commentService.getAll().subscribe(comments => {
      this.comments = comments;
    })
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(comments => {
        this.comments = comments;
      }
    );
  }


  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date().getTime());
        this.commentService.create(this.commentsForm.value).then(_ => {
          this.router.navigateByUrl('/comments');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }
}

