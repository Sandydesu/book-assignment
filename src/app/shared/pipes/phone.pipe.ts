import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(transformvalue: any, args?: any): any {
    if (transformvalue !== undefined && transformvalue !== null) {
      let value;
      value = transformvalue.split(/[-() ]+/).join('');
      if (value.length <= 3) {
        return value.replace(/\D+/g, '').replace(/^(\d{+}).*/, '($1)');
      }
      if (value.length > 3 && value.length <= 6) {
        return value.replace(/\D+/g, '').replace(/^(\d{3})(\d+).*/, '($1) $2');
      } else {
        return value
          .replace(/\D+/g, '')
          .replace(/^(\d{3})(\d{3})(\d+).*/, '($1) $2-$3');
      }
    }
    return null;
  }
}
