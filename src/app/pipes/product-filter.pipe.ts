import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText?filterText.toLocaleLowerCase() : ""
    return filterText?value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value
  }

}
