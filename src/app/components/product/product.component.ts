import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private productService: ProductService, private activatedRoute : ActivatedRoute, private toastrService:ToastrService, private cartService:CartService) {} // ProductComponent, artık ProductService i kullanabilir demektir.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['categoryId']){
        this.getProductsByCategory(params['categoryId']);
      }else{
        this.getProducts();
      }
    })
  }

  getProducts() { // normalde Angular da metotlar asenkron çalışır. senkronize etmek adına metot içerisinde dataLoaded değişkenini true ya çekiyoruz.
    this.productService.getProducts().subscribe(response =>{
      this.products = response.data;
      this.dataLoaded=true;
    });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response =>{
      this.products = response.data;
      this.dataLoaded=true;
    })
  }

  addToCart(product:Product){
    if(product.unitsInStock === 0){
    this.toastrService.error("Sold out : " + product.productName);
  }else{
    this.toastrService.success("Added to Cart : " + product.productName);
    this.cartService.addToCart(product);
  }
  }
}

// metodun başına, ortasına ve sonuna birer durum mesajı koyduğumuzu varsayarsak, iş yüküne göre en hafif olan durum mesajı önce gelir.Bu da 
// metodun düzenli ve senkronize çalışmadığını gösterir. Bu senkronizasyonu sağlamak adına veriyi yönetebileceğimiz bir düzenleme yapmalıyız.
// dataLoaded değişkeni, bu senkronizasyonu sağlamak adına tasarlanmıştır.
