import { Component, OnInit } from '@angular/core';
import {AlbumDataService} from "../Services/album-data.service";
import {Album} from "../Models/Album.model";

@Component({
  selector: 'app-album-fav',
  templateUrl: './album-fav.component.html',
  styleUrls: ['./album-fav.component.css']
})
export class AlbumFavComponent implements OnInit {

  constructor(private albumDataService: AlbumDataService) { }

  albums: Album[] = [];

  ngOnInit(): void {
    // @ts-ignore
    this.albums=JSON.parse(localStorage.getItem('fav'));
    console.log(localStorage.getItem('fav'))
  }

  // @ts-ignore
  removeFromFav(album){
    this.albums.forEach( (item, index) => {
      if(item === album) this.albums.splice(index,1);
    });
    localStorage.setItem('fav', JSON.stringify(this.albums));
  }

}
