import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, vatRate:number): number { //value-> pipe ın değiştirmeye çalıştığı değer(unitPrice) => number-> dönüş tipi => vatAddedValue -> parametre
    return value + (value*vatRate/100);
  }

}
