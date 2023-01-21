import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedMovieComponent } from './components/featuredMovie/featuredMovie.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieRowComponent } from './components/movieRow/movieRow.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedMovieComponent,
    MovieRowComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
