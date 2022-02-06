import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackLength'
})
export class TrackLengthPipe implements PipeTransform {

  transform(value: number): string {
    let minutes = value/60000
    let seconds = minutes % 1 * 60
    return Math.trunc(minutes) + ":" + Math.trunc(seconds).toString().padStart(2, '0');
  }

}
