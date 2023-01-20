import { Component, Input, OnInit } from '@angular/core';
import IMovieInfo from 'src/app/interfaces/movieInfo.interface';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featuredMovie.component.html',
  styleUrls: ['./featuredMovie.component.scss'],
})
export class FeaturedMovieComponent implements OnInit {
  @Input() model: IMovieInfo;

  constructor() {}

  getFullYear() {
    if (this.model.first_air_date) {
      return new Date(this.model.first_air_date).getFullYear();
    }

    return '';
  }

  renderSeasons() {
    const label =
      this.model.number_of_seasons !== 1 ? 'temporadas' : 'temporada';

    return `${this.model.number_of_seasons} ${label}`;
  }

  renderDescription() {
    let description = this.model?.overview || '';
    if (description?.length > 300) {
      description = `${description.substring(0, 300)}...`;
    }

    return description;
  }

  getGenres() {
    let genres = [];
    if (this.model.genres) {
      genres = this.model.genres.map((genre: any) => {
        return genre.name;
      });
    }

    return genres.join(', ');
  }

  ngOnInit(): void {}
}
