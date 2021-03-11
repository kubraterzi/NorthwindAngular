import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;

  constructor(private productService: ProductService) {} // ProductComponent, artık ProductService i kullanabilir demektir.

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() { // normalde Angular da metotlar asenkron çalışır. senkronize etmek adına metot içerisinde dataLoaded değişkenini true ya çekiyoruz.
    this.productService.getProducts().subscribe(response =>{
      this.products = response.data;
      this.dataLoaded=true;
    });
  }
}

// metodun başına, ortasına ve sonuna birer durum mesajı koyduğumuzu varsayarsak, iş yüküne göre en hafif olan durum mesajı önce gelir.Bu da 
// metodun düzenli ve senkronize çalışmadığını gösterir. Bu senkronizasyonu sağlamak adına veriyi yönetebileceğimiz bir düzenleme yapmalıyız.
// dataLoaded değişkeni, bu senkronizasyonu sağlamak adına tasarlanmıştır.
