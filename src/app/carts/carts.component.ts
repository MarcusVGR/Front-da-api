import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../products/products.model';
import { CartModel } from './cart.model';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  carts: Array<any> = new Array();
  cart: CartModel = new CartModel();
  product: ProductsModel = new ProductsModel();

  constructor(private cartsService: CartsService) { }

  ngOnInit(): void {
  }

  viewCart(id: number) {
    this.cartsService.viewCart(id).subscribe({
      next: (carts) => {
        this.carts = carts;
      },
      error: (err) => console.log('Erro', err)
    })
  }

  createCart() {
    this.cartsService.createCart().subscribe({
      next: (carts) => { },
      error: (err) => console.log('Erro', err)
    })
  }

  addItem(cartId: any, productId: any) {
    this.cartsService.addItem(cartId, productId).subscribe({
      next: (carts) => {
        this.product = new ProductsModel();
        this.viewCart(cartId);
      },
      error: (err) => console.log('Erro', err)
    })
  }

}
