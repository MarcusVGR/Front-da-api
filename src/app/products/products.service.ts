import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from './products.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  allProducts(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products')
  }

  createProduct(product: ProductsModel): Observable<any> {
    return this.httpClient.post('http://localhost:3000/products',
      product,
      {})
  }

  editProduct(id: any, product: ProductsModel): Observable<any> {
    return this.httpClient.put('http://localhost:3000/products/'.
      concat(id),
      product,
      {})
  }
}
