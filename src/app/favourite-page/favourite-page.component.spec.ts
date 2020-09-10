import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePageComponent } from './favourite-page.component';

describe('FavouritePageComponent', () => {
  let component: FavouritePageComponent;
  let fixture: ComponentFixture<FavouritePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
