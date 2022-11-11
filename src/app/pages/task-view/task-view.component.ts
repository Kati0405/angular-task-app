import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { List } from 'src/app/models/list';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];
  selectedListId: string

  constructor(public modalService: ModalService, private taskService: TaskService) { }

  ngOnInit() {
  }
}
