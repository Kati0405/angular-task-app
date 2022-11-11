import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ModalService } from 'src/app/services/modal.service';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {


  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router, private modalService: ModalService) { }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  listId: string

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params.listId
      }
    )
  }

  updateList(title: string) {
    this.taskService.updateList(this.listId, title).subscribe((list: List) => {
      this.router.navigate(['/lists', this.listId])
      this.modalService.close('modal-edit-list')
    })
  }
}
