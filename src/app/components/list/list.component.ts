import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/models/list';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  selectedListId: string = ''


  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
        }
      }
    )
  }

  onDeleteListClick(value: string) {
    alert(`The ${this.list._id} list was deleted`)
    this.taskService.deleteList(this.list._id).subscribe(() => {
      this.router.navigate(['/lists'])
    })
  }
}
