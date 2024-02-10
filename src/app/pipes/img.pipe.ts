import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `https://image.tmdb.org/t/p/w500${value}`
  }

}
