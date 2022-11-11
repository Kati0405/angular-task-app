import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list';
import { Task } from '../models/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: (List | Task)[], search: string): any[] {

    if (search.length === 0) {
      return items
    }

    return items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )

  }

}
