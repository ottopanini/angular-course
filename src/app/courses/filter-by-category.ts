import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../model/course';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategory implements PipeTransform {
  transform(values: Course[], category: string): any {
    console.log('called transform()');
    return values.filter(value => value.category === category);
  }
}
