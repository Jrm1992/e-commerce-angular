import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];

  ngOnInit() {
    fetch('./assets/products.json')
      .then(res => res.json())
      .then(jsonData => {
        this.products = jsonData.data;
      });
  }
}
