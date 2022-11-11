import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faPenToSquare, faTrash, faEllipsisVertical, faBook, faComment } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {
  @Output() newSelectedIdEvent = new EventEmitter<string>()
  @Output() newArchiveEvent = new EventEmitter<any>()
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faEllipsisVertical = faEllipsisVertical;
  faBook = faBook;
  faComment = faComment;
  selectedListId: string;
  selectedTaskId: string;
  color: string;
  @Input() editModal: string;
  @Input() taskId?: string
  @Input() showMore: boolean = true
  @Input() isTask: boolean = false


  constructor(public modalService: ModalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedListId = params.listId
        this.selectedTaskId = params.taskId
      }
    )
  }

  onSelectId() {
    this.newSelectedIdEvent.emit()
  }

  onArchive() {
    this.newArchiveEvent.emit()
  }

}
