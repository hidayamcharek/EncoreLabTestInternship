import { Component, OnInit } from '@angular/core';
import {AlbumDataService} from "../Services/album-data.service";
import { LoremIpsum } from "lorem-ipsum";
import {Album} from "../Models/Album.model";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  notEmptyPost = true;
  notscrolly = true;

  // @ts-ignore
  searchValue: string;

  // @ts-ignore
  albums: Album[] = [];
  albumsToShow: Album[] = [];
  fav: Album[] = [];
  idsFav: [] = []
  constructor(private albumDataService: AlbumDataService , private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.albumsToShow=this.albums
    this.getFrom0to10()
    // @ts-ignore
    console.log(JSON.parse(localStorage.getItem('ids')))
  }

  addToFav(album:Album){
    this.fav.push(album)

    for(let n = 0; n <= this.albums.length; n++){
      if(album==this.albums[n]){
        this.albums[n].fav=true;
      }
    }

    // @ts-ignore
    localStorage.setItem('fav', JSON.stringify(this.fav));
    localStorage.setItem('ids', JSON.stringify(this.idsFav));
    console.log(localStorage.getItem('fav'));
    // @ts-ignore
    this.idsFav.push(album.id)
    console.log(this.idsFav)
  }

  // @ts-ignore
  removeFromFav(album){
    this.fav.forEach( (item, index) => {
      if(item === album) this.fav.splice(index,1);
    });
    this.idsFav.forEach( (item, index) => {
      if(item === album.id) this.idsFav.splice(index,1);
    });
    localStorage.setItem('fav', JSON.stringify(this.fav));
    localStorage.setItem('ids', JSON.stringify(this.idsFav));
    for(let n = 0; n <= this.albums.length; n++){
      if(album==this.albums[n]){
        this.albums[n].fav=false;
      }
    }
    console.log(localStorage.getItem('fav'));
  }

  getFrom0to10(){
    for(let n = 0; n <= 10; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n).concat("/100/100"),data.author,this.lorem.generateSentences(1),false));


      })
    }
  }
  getFromNext10(){
    let x = this.albums.length;
    if(x>=1083){
      x=x-1083
    }
    if(x>=2116){
      x=x-2116
    }
    if(x>=3249){
      x=x-3249
    }
    for(let n = x; n <= x+10; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n).concat("/100/100"),data.author,this.lorem.generateSentences(1),false));

      })
    }
    this.notscrolly = true;
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.notscrolly = false;
      this.getFromNext10();
    }
  }
}
