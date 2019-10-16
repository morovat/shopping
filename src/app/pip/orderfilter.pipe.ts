import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderfilter'
})
export class OrderfilterPipe implements PipeTransform {

  transform(value: any, filterId: number, propsName: string): any {
    const resultArray = []
    if(value.length == 0 || filterId === 0){
      return value;
    }else if(filterId == null) {
      resultArray.push(value);
      return resultArray;
    }
    for (const item of value){
      if(item[propsName] == filterId){
        resultArray.push(item)
      }
    }
    return resultArray;
  }
}
