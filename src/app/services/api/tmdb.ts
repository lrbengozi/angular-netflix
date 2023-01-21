import { Injectable } from '@angular/core';
import IMovieInfo from 'src/app/interfaces/movieInfo.interface';

const BASE_URL = 'https://api.themoviedb.org/3';

interface getHomeListResponseItem {
  slug: string;
  title: string;
  items: any;
}

export interface IGetHomeListResponse extends Array<getHomeListResponseItem> {}

const getFetch = async (endpoint: string) => {
  const config = {
    headers: new Headers({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTFlZjc4MmZhN2U2NTZmZjcwNWFkOTIyMWUzNDY4OCIsInN1YiI6IjYxNzJiOTEyOGRkYzM0MDA0NGIxZjc3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yZ0jHWSlVeoC_C2UHhVpVbvi8BFvpZh1bGuPqafX_60`,
    }),
  };
  const req = await fetch(`${BASE_URL}${endpoint}`, config);

  return await req.json();
};

@Injectable({
  providedIn: 'root',
})
export class Tmdb {
  async getHomeList() {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await getFetch(`/discover/tv?with_networks=213&language=pt-br`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await getFetch(`/trending/all/week?language=pt-br`),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await getFetch(`/movie/top_rated?language=pt-br`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await getFetch(`/discover/movie?with_genres=28&language=pt-br`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await getFetch(`/discover/movie?with_genres=35&language=pt-br`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await getFetch(`/discover/movie?with_genres=27&language=pt-br`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await getFetch(
          `/discover/movie?with_genres=10749&language=pt-br`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await getFetch(`/discover/movie?with_genres=99&language=pt-br`),
      },
    ];
  }

  async getMovieInfo(movieId: string, type: string): Promise<IMovieInfo> {
    let info: IMovieInfo = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await getFetch(`/movie/${movieId}?language=pt-br`);
          break;
        case 'tv':
          info = await getFetch(`/tv/${movieId}?language=pt-br`);
          break;
        default:
          break;
      }
    }

    return info;
  }
  async getTrailer(movieId: string, type: string) {
    let info = {
      status_code: 0,
      results: [
        {
          site: 'YouTube',
          key: '',
          type: 'Trailer',
        },
      ],
    };

    if (movieId) {
      info = await getFetch(`/tv/${movieId}/videos`);

      if (info.status_code === 34) {
        info = await getFetch(`/movie/${movieId}/videos`);
      }
    }

    const results = info.results.filter(
      (i) => i.site === 'YouTube' && i.type === 'Trailer' && i.key
    );

    return results[results.length - 1].key;
  }
}

export default Tmdb;
