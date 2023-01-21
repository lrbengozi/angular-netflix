import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedMovieComponent } from './components/featuredMovie/featuredMovie.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieRowComponent } from './components/movieRow/movieRow.component';
import { MaterialUiModule } from './material.ui.module';
import { HomeComponent } from './pages/home/home.component';
import { WatchComponent } from './pages/watch/watch.component';
import { SafePipe } from './services/api/safePipe/safePipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchComponent,
    FeaturedMovieComponent,
    MovieRowComponent,
    HeaderComponent,
    SafePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
