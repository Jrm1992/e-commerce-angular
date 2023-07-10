import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ModalComponent } from './components/newsletter/modal/modal.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductModalComponent } from './components/products/product-modal/product-modal.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryCardComponent } from './components/search-for-category/category-card/category-card.component';
import { SearchForCategoryComponent } from './components/search-for-category/search-for-category.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { BannerComponent } from './shared/banner/banner.component';
import { CarouselComponent } from './shared/banner/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

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
    ProductModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
