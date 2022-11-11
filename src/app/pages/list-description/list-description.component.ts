import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/models/list';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-description',
  templateUrl: './list-description.component.html',
  styleUrls: ['./list-description.component.css']
})
export class ListDescriptionComponent implements OnInit {
  list: List
  selectedListId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.selectedListId = params.listId
      }
    )
    this.taskService.getListById(this.selectedListId).subscribe((list: List) => {
      this.list = list
    })
  }

}
