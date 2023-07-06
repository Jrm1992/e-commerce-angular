import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get(this.API);
  }
}
