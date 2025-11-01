import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value:any) {
  //   // console.log(value);
  //   if(value.length>=40){
  //  return value.slice(0,20)+'...';
  // }
  // return value;
// }
//value refers content,limit refers length ,
// symbol refers symbols like '...','***'
transform(value:any,limit?:any,symbol?:any){
  if(value.length>limit){
    return value.slice(0,limit)+symbol;
  }
  return value;
}

}
