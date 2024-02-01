import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string, order: string = 'asc'): any[] {
    if (!value || !value.length) {
      return [];
    }

    if (order === 'asc') {
      return value.sort((a, b) => a[field] - b[field]);
    } else {
      return value.sort((a, b) => b[field] - a[field]);
    }
  }
}
