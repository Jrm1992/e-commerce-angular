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
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    SearchForCategoryComponent,
    CategoryCardComponent,
    ProductsComponent,
    ProductCardComponent,
    FacilitiesComponent,
    FooterComponent,
    NewsletterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
