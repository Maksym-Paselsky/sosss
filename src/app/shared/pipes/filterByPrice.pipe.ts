import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByPrice"
})
export class FilterByPricePipe implements PipeTransform {
  transform(items: any, select?: any): any {
   
      return select
        ? items.filter(item => item["productPrice"] < select)
        : items;
   
  }
}
