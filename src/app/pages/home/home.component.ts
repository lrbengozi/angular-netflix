import { Component, OnInit } from '@angular/core';
import IMovieInfo from 'src/app/interfaces/movieInfo.interface';
import Tmdb, { IGetHomeListResponse } from '../../services/api/tmdb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  moviesList: IGetHomeListResponse | [] = [];
  featuredData: IMovieInfo = {};

  constructor(private mdbService: Tmdb) {
    this.load();
  }

  ngOnInit(): void {}

  load = async () => {
    const list = await this.mdbService.getHomeList();
    this.moviesList = list;

    const originals = list.filter((i) => i.slug === 'originals');
    const randomChosen = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );
    const chosen = originals[0].items.results[randomChosen];
    const chosenInfo = await this.mdbService.getMovieInfo(chosen.id, 'tv');


    this.featuredData = chosenInfo;
  };
}
