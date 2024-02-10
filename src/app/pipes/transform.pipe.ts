import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: string, args: number ): unknown {
    return  value.substring(0,args)+'...'
  }

}
