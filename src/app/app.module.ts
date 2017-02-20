import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeCopmonentComponent } from './youtube-copmonent/youtube-copmonent.component';
import { YoutubeItemComponent } from './youtube-item/youtube-item.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeCopmonentComponent,
    YoutubeItemComponent
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
