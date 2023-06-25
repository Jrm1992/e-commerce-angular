import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-for-category',
  templateUrl: './search-for-category.component.html',
  styleUrls: ['./search-for-category.component.scss'],
})
export class SearchForCategoryComponent implements OnInit {
  items = [];

  ngOnInit() {
    fetch('./assets/categoryItems.json')
      .then(res => res.json())
      .then(jsonData => {
        this.items = jsonData.data;
      });
  }
}
