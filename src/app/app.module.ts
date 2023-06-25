import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/banner/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchForCategoryComponent } from './components/search-for-category/search-for-category.component';
import { CategoryCardComponent } from './components/search-for-category/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    SearchForCategoryComponent,
    CategoryCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
