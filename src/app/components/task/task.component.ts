import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() selectedListId: string;
  tasks: Task[] = [];
  selectedTaskId: string = '';


  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.taskId) {
          this.selectedTaskId = params.taskId;
        }
      }
    )
  }

  onTaskClick() {

  }

  onDeleteTaskClick(id: string) {
    alert(`The ${this.task._id} task was deleted`)
    this.taskService.deleteTask(this.selectedListId, this.task._id).subscribe(() => {
      this.tasks = this.tasks.filter(val => val._id !== this.task._id);
      this.router.navigate(['/lists', { listId: this.selectedListId }])
    })
  }

  onArchiveTaskClick(task: Task) {
    this.taskService.archiveTask(this.selectedListId, this.task._id, !this.task.archived).subscribe(() => {
      this.task.archived = !this.task.archived
    })
  }
}
