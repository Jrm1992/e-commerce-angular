import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForCategoryComponent } from './search-for-category.component';

describe('SearchForCategoryComponent', () => {
  let component: SearchForCategoryComponent;
  let fixture: ComponentFixture<SearchForCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchForCategoryComponent],
    });
    fixture = TestBed.createComponent(SearchForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
