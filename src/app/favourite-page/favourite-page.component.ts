import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.sass']
})
export class FavouritePageComponent implements OnInit {

  imagesList: Observable<any>;
  constructor(private store: Store<any>) {
    this.imagesList = this.store.select(state => state.addImage);
   }

  ngOnInit(): void {
  }

}
