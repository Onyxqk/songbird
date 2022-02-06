import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackLength'
})
export class TrackLengthPipe implements PipeTransform {

  // takes a numeric value (i.e. track length in milliseconds) as the input parameter
  // returns a string containing minutes and seconds in the format X:XX
  transform(value: number): string {
    let minutes = value / 60000
    let seconds = minutes % 1 * 60
    return Math.trunc(minutes) + ":" + Math.trunc(seconds).toString().padStart(2, '0');
  }

}
