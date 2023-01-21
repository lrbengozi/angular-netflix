import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  classNameHeader = '';
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.classNameHeader = window.scrollY > 10 ? 'black' : '';
  }

  ngOnInit(): void {}
}
