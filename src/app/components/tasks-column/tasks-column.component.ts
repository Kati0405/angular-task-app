import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../base/base/base.component';
import { Task } from 'src/app/models/task';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { SortingService } from 'src/app/services/sorting.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.css']
})
export class TasksColumnComponent extends BaseComponent implements OnInit {
  @Input() title: string;
  @Input() connectedTo: any[];
  @Input() taskStatus: string;
  @Input() column: string;
  tasks: Task[] = [];
  selectedListId: string;
  selectedTaskId: string;
  @Output() GetTaskEvent = new EventEmitter<Task[]>();

  constructor(private route: ActivatedRoute, private taskService: TaskService, public sortingService: SortingService, private router: Router) {
    super();
  }

  override ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getTasksByStatus(params.listId, this.taskStatus).subscribe((tasks: Task[]) => {
            this.tasks = tasks
          })
          this.selectedListId = params.listId
        }
        // else {
        //   this.tasks = undefined
        // }
      }
    )
  }

  updateTaskStatus(status: string, taskId: string) {
    this.taskService.updateTaskStatus(this.selectedListId, taskId, status).subscribe(() => {
      this.router.navigate(['/lists', this.selectedListId])
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      const taskId = event.container.data[event.previousIndex]._id
      this.updateTaskStatus(this.taskStatus, taskId)
    }
  }
  selected = {
    name: 'yellow',
    color: 'rgb(234 240 212)'
  }

  data = [{
    name: 'red',
    color: 'rgb(208 183 193)'
  }, {
    name: 'green',
    color: 'rgb(167 215 209)'
  }, {
    name: 'yellow',
    color: 'rgb(234 240 212)'
  }, {
    name: 'blue',
    color: 'rgb(188 212 224)'
  }]
}
