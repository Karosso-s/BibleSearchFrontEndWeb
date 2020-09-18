import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PixabayImagesComponent } from './pixabay-images/pixabay-images.component';
import { HttpClientModule } from '@angular/common/http';
import { PixabayService } from './pixabay.service';
import { BibleSearchComponent } from './bible-search/bible-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PixabayImagesComponent,
    BibleSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PixabayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
