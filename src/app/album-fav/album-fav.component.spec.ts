import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFavComponent } from './album-fav.component';

describe('AlbumFavComponent', () => {
  let component: AlbumFavComponent;
  let fixture: ComponentFixture<AlbumFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
