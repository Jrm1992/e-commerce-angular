import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService
      .getAllProducts()
      .subscribe(resultado => (this.products = resultado));
  }
}
