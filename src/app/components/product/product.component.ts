import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product1 = {productId:1, productName:'Chai', categoryId:'3', unitPrice:12, unitsInStock:25}
  product2 = {productId:2, productName:'Sushi', categoryId:'2', unitPrice:17, unitsInStock:20}
  product3 = {productId:3, productName:'Waffle', categoryId:'1', unitPrice:15, unitsInStock:10}

  products=[this.product1, this.product2,this.product3]
}
