import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'  //用在模板表达式中的管道名字
})
export class FilterPipe implements PipeTransform {
  /**@params value:输入值，即管道输入来的原始的值； args：可选参数值，例如birthday | date:'yyyy-MM-dd HH-mm-ss'
   * 中的字符串'yyyy-MM-dd HH-mm-ss'即为agrs；
   * transform方法根据输入值value来转化原始值，然后把转化后的原始值返回出去
  * transform(value: any, args?: any): any {
    return null;
  }

   list:any[] 表示数组型的商品列表
   filterField:string 表示要根据商品价格还是名称过滤
   keyword:string 用户输入的关键字
  */
  transform(list: any[], filterField: string,keyword: string):any{
    /* 如果用户没有传过滤值和关键字，则返回列表不进行过滤 */
    if(!filterField ||!keyword){
      return list;
    }
    return list.filter( item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });

  }

}
