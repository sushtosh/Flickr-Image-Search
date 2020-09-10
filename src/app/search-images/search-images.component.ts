import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.sass']
})
export class SearchImagesComponent implements OnInit {
  images = [];
  keyword: string = '';
  listCount = [];
  count = 0;

  constructor(private store: Store<any>,private flickrService: FlickrService) { }

  ngOnInit() {
  }

  search() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  addListCount() {
    this.count++;
    this.listCount.push("List"+this.count);
  }
  
  addImage(image:any,listName:string) {
    this.store.dispatch({
      type: 'ADD_IMAGE',
      payload: image,
      name: listName
    });
  }


}
