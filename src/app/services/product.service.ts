import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Backend e(API), verileri çekmek üzere istek yollayabilmemizi sağlayan yapıdır.
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({ // bunun bir service olduğunu ifade eder.
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44388/api/products/getall';

  constructor(private httpClient: HttpClient) {} // HttpClient yapısını component lerde kullanabilmek için, constructor da bir HttpClient türünde bir nesne üretmesini sağlıyoruz.
  //Diğer ProductComponent in diğer component lerde çağırılması durumunda . ya basıldığında bu değişkenin de gelmemesi adına private yaptık.
  //Default accessibility : public gibi düşünülebilir. C# ve Java nın aksine, bu class ın constuctor ında tanımlanan bir değişkene, ilgili
  //component sınıfının, ts uzantılı dosyasının tamamından ulaşılabilir.

  getProducts(): Observable<ProductResponseModel> { //subscribe olunabilir bir ProductResponseModel olarak döneceksin. => Observable<ProductResponseModel> -> geri dönüş tipi
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); //ilgili url den gelen any tipindeki url i burada ProductResponseModel türüne çevirdik.
  }
}
