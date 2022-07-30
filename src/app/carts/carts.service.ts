import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private httpClient: HttpClient) { }

  viewCart(id: any): Observable<any> {
    return this.httpClient.get('http://localhost:3000/carts/'.concat(id))
  }

  createCart(): Observable<any> {
    return this.httpClient.post('http://localhost:3000/carts',
      {})
  }

  addItem(cartId: any, productId: any): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/carts/'.concat(cartId),'/carts_items/'.concat(productId))
  }

  deleteItems(cartId: any): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:3000/carts/'.concat(cartId, '/carts_items'))
  }

  orderCart(cartId: any): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/carts/'.concat(cartId),'/checkouts')
  }

}
