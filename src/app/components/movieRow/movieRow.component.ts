import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movieRow.component.html',
  styleUrls: ['./movieRow.component.scss'],
})
export class MovieRowComponent implements OnInit {
  @Input() title: any;
  @Input() items: any;
  scrollx = 0;

  constructor() {}

  ngOnInit(): void {}

  getImgUrl(key: any) {
    return `https://image.tmdb.org/t/p/w300${key}`;
  }

  handleLeftArrow() {
    let x = this.scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    this.scrollx = x;
  }

  handleRightArrow() {
    let x = this.scrollx - Math.round(window.innerWidth / 2);
    let listW = this.items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    this.scrollx = x;
  }

  handleMovieRowListStyle() {
    return `margin-left: ${this.scrollx}px; width: ${this.items.results.length * 150}; display: flex;`
  }
}
