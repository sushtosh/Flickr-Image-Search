import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImagesComponent } from './search-images/search-images.component';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';


const routes: Routes = [
  { path: '', component: SearchImagesComponent },
  { path: 'favourite', component: FavouritePageComponent  },
  { path: '#',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
