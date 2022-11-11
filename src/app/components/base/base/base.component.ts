import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  filterInput = '';
  SortParam = 'title';
  SortDirection = 'asc'

  constructor() { }

  onsort(value: string) {
    this.SortDirection = value
  }

  onfilter(value: string) {
    this.filterInput = value
  }

  onsortparam(value: string) {
    this.SortParam = value
  }

  ngOnInit(): void {
  }

}
