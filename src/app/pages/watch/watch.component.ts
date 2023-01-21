import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Tmdb from 'src/app/services/api/tmdb';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  youTubeKey = '';
  type = '';
  id = '';

  constructor(private mdbService: Tmdb, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.type = params.get('type') || '';

      this.load();
    });
  }

  async load() {
    if (this.id) {
      const key = await this.mdbService.getTrailer(this.id, this.type);
      this.youTubeKey = `https://www.youtube.com/embed/${key}?autoplay=1`;
    }
  }
}
