import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { SortingService } from 'src/app/services/sorting.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  selectedListId: string;
  selectedTaskId: string;
  TODO: Task[] = [];
  PROGRESS: Task[] = [];
  DONE: Task[] = [];

  statuses = ['todo', 'progress', 'done']

  constructor(private route: ActivatedRoute, private taskService: TaskService, public sortingService: SortingService, public modalService: ModalService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.statuses.forEach(status => {
            this.selectedListId = params.listId;
            this.selectedTaskId = params.taskId;
            this.taskService.getTasksByStatus(params.listId, status).subscribe((tasks: Task[]) => {
              this[status] = tasks
            })
          })
          this.selectedListId = params.listId

        }
        // else {
        //   this.tasks = undefined
        // }
      }
    )
  }
}
