import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { HttpClientModule } from '@angular/common/http';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { FormsModule } from '@angular/forms';
import { addImageReducer } from './addImage.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent,
    FavouritePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({addImage: addImageReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
