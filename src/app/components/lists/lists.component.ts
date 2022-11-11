import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';
import { TaskService } from 'src/app/services/task.service';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor(public taskService: TaskService, public sortingService: SortingService) { }

  ngOnInit(): void {
    this.taskService.getLists().subscribe(() => {
    })
  }
}
