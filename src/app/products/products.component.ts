import { Component, OnInit } from '@angular/core';
import { ProductsModel } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: ProductsModel = new ProductsModel();
  products: Array<any> = new Array();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.allProducts();
  }

  allProducts() {
    this.productsService.allProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => console.log('Erro', err)
    })
  }

  createProduct() {
    console.log(this.product)
    this.productsService.createProduct(this.product).subscribe({
      next: (product) => {
        this.product = new ProductsModel();
        this.allProducts();
      },
      error: (err) => console.log('Erro', err)
    })
  }

  editProduct(id: number) {
    this.productsService.editProduct(id, this.product).subscribe({
      next: (product) => {
        this.product = new ProductsModel();
        this.allProducts();
      },
      error: (err) => console.log('Erro', err)
    })
  }

}

