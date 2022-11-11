import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.css']
})
export class SortingPanelComponent implements OnInit {
  @Output() SortDirectionEvent = new EventEmitter<string>();
  @Output() FilterEvent = new EventEmitter<string>();
  @Output() SortParamEvent = new EventEmitter<string>();
  filterInput = '';
  faSort = faSort;
  SortDirection = ''
  SortParam = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc'
    } else {
      this.SortDirection = 'desc'
    }
    this.SortDirectionEvent.emit(this.SortDirection)
  }

  onFilter(value: string) {
    this.FilterEvent.emit(value)
  }

  onSortParam(value: string) {
    this.SortParamEvent.emit(value)
  }
}
