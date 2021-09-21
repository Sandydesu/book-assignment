import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more',
})
export class MorePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const ellipsis = '...';
    return value.length > 150 ? `${value.substr(0, 149)}${ellipsis}` : value;
  }
}
