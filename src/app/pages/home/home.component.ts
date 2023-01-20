import { Component, OnInit } from '@angular/core';
import Tmdb, { IGetHomeListResponse } from '../../services/api/tmdb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: IGetHomeListResponse | [] = [];

  constructor(private mdbService: Tmdb) {
    this.load()
  }
  
  ngOnInit(): void {}

  load = async () => {
    this.movieList = await this.mdbService.getHomeList()
  }
}
