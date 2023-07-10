import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides = [];

  interval: number = 0;

  curActive = 0;

  ngOnInit() {
    this.loopCarousel();
  }

  changeActive() {
    if (this.curActive < this.slides.length - 1) {
      this.curActive += 1;
    } else {
      this.curActive = 0;
    }
  }

  setActive(item: number) {
    this.curActive = item;
  }

  nextActive() {
    if (this.curActive < this.slides.length - 1) {
      this.curActive += 1;
    } else {
      this.curActive = 0;
    }
  }

  prevActive() {
    if (this.curActive === 0) {
      this.curActive = this.slides.length - 1;
    } else {
      this.curActive -= 1;
    }
  }

  loopCarousel() {
    this.interval = window.setInterval(() => {
      this.changeActive();
    }, 3000);
  }
}
