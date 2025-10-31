import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:any) {
    // console.log(value);
   return value.slice(0,20);
  }

}
