import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByPriceDown"
})
export class FilterByPriceDownPipe implements PipeTransform {
  transform(items: any, select?: any): any {
   
      return select
        ? items.filter(item => item["productPrice"] > select)
        : items;
   
  }
}
