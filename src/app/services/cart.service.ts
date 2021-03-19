import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    // eğer cartItems içerisinde ilgili ürün varsa, onu item e at.
    let item = CartItems.find((c) => c.product.productID === product.productID); // cartItems cartItem nesnesinden olduğu için, o nesnenin içerisindeki product ın productId si demek için bu şekilde kullandık
    if (item) {
      // eğer item içerisi doluysa quantity sini 1 arttır.(Sepette defalarc aynı isim yazılmasın da span ile yanında sayı bildirilsin)
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item = CartItems.find((c) => c.product.productID == product.productID);
    if (item) {
      CartItems.splice(CartItems.indexOf(item), 1); // CartItems sabiti içerisinde item e dair bir kayıt varsa ona abone ol, ve 1 tane sil
    }
  }

  listCart(): CartItem[] {
    return CartItems; // static bir değişken olduğu için doğrudan çekebiliyoruz.
  }
}
