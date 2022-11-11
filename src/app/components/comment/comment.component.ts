import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment
  comments: Comment[] = [];
  userEmail = this.getUserEmail()
  date = Date.now()
  taskId: string
  listId: string
  id: string

  constructor(private authService: AuthService, private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  deleteComment(comment: Comment) {
    this.taskService.deleteCommentToTask(this.listId, this.taskId, comment._id).subscribe(() => {
      this.comments = this.comments.filter(val => val._id !== this.comment._id);
      this.router.navigate([`/lists/${this.listId}/tasks/${this.taskId}/comments`, { relativeTo: this.route }])
    })
  }

  getUserEmail() {
    return this.authService.getUserEmail()
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params['taskId']
        this.listId = params['listId']
        this.id = params['id']
      }
    )
  }
}
