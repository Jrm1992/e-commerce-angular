import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/banner/carousel/carousel.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/newsletter/modal/modal.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryCardComponent } from './components/search-for-category/category-card/category-card.component';
import { SearchForCategoryComponent } from './components/search-for-category/search-for-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
