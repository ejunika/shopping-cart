import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: any[]): any {
    if (args && args[0] && args[0].length > 0) {
      return value.filter((v) => args[0].indexOf(v.brand) !== -1);
    } else if (args && args[1] && args[1].length > 0) {
      return value.filter((v) => v.name.indexOf(args[1]) !== -1);
    } else {
      return value;
    }
  }

}
