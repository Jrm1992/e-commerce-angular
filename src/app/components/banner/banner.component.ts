import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  data: any = [];

  slides = [];

  ngOnInit() {
    fetch('./assets/carouselImages.json')
      .then(res => res.json())
      .then(jsonData => {
        this.data = jsonData;
        this.getBannerSize();
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getBannerSize();
  }

  getBannerSize() {
    if (window.innerWidth <= 425) {
      this.slides = this.data.mobile;
      return;
    }
    if (window.innerWidth <= 768) {
      this.slides = this.data.tablet;
      return;
    }
    this.slides = this.data.desktop;
  }
}
