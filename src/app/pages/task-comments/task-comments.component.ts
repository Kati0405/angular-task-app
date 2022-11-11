import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comment } from 'src/app/models/comment';

import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.css']
})
export class TaskCommentsComponent implements OnInit {
  task: Task;
  title: string;
  createdDate: number;
  comments: Comment[] = []
  selectedListId: string;
  selectedTaskId: string;

  constructor(public taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedListId = params.listId
        this.selectedTaskId = params.taskId
      }
    )

    this.taskService.getTaskById(this.selectedListId, this.selectedTaskId).subscribe((task: Task) => {
      this.task = task
      this.title = task.title

    })

    this.taskService.getCommentsToTask(this.selectedListId, this.selectedTaskId).subscribe((comments: Comment[]) => {
    })
  }

  postComment(message: string) {
    this.taskService.addCommentToTask(this.selectedListId, this.selectedTaskId, message).subscribe((newComment: Comment) => {
      this.router.navigate([`/lists/${this.selectedListId}/tasks/${this.selectedTaskId}/comments`, { relativeTo: this.route }])
    })
  }

}
