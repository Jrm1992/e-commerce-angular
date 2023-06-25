import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() categoryItem: { itemImg: string; itemName: string } = {
    itemImg: '',
    itemName: '',
  };
}
