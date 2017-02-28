import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeCopmonentComponent } from './youtube-copmonent/youtube-copmonent.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeCopmonentComponent,
    WeatherComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
