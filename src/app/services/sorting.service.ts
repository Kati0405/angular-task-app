import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
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

}
