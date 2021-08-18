import { Component, OnInit } from '@angular/core';
import {AlbumDataService} from "../Services/album-data.service";
import { LoremIpsum } from "lorem-ipsum";
import {Album} from "../Models/Album.model";

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

  // @ts-ignore
  searchValue: string;

  // @ts-ignore
  albums: Album[] = [];
  albumsToShow: Album[] = [];
  fav: Album[] = [];
  i=0
  button="Load more"
  constructor(private albumDataService: AlbumDataService) { }

  ngOnInit(): void {
    this.getFrom0to10()
    this.albumsToShow=this.albums
  }

  addToFav(album:Album){
    this.fav.push(album)
    // @ts-ignore
    localStorage.setItem('fav', JSON.stringify(this.fav));
    console.log(localStorage.getItem('fav'));
  }

  loadMore(){
    this.i++
    if(this.i===1){
      this.getFrom11to1083()
    }
    if(this.i===2){
      this.getFrom1084to2166()
    }
    if(this.i===3){
      this.getFrom2167to3250()
    }
    if(this.i===4){
      this.getTheRest()
    }
    this.i++
    this.pushIntoTheAlbum()
    console.log(this.i)
    if(this.i>=4){
      this.button="no more content"
    }
  }

  pushIntoTheAlbum(){
    // @ts-ignore
    this.albumsToShow.push(this.albums.slice(this.albumsToShow.length,this.albumsToShow.length+10))
  }

  getFrom0to10(){
    for(let n = 0; n <= 10; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n).concat("/100/100"),data.author,this.lorem.generateSentences(1)));
      })
    }
  }

  getFrom11to1083(){
    for(let n = 11; n <= 1083; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n).concat("/100/100"),data.author,this.lorem.generateSentences(1)));
      })
    }
  }


  getFrom1084to2166(){
    for(let n = 1084; n <= 2166; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n-1083).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n-1083).concat("/100/100"),data.author,this.lorem.generateSentences(1)));
      })
    }
  }

  getFrom2167to3250(){
    for(let n = 2167; n <= 3251; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n-2168).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n-2168).concat("/100/100"),data.author,this.lorem.generateSentences(1)));
      })
    }
  }
  getTheRest(){
    for(let n = 3249; n <= 4000; n++){
      // @ts-ignore
      this.albumDataService.getPictures(n-3250).subscribe((data: any[])=>{
        // @ts-ignore
        this.albums.push(new Album(data.id,"https://picsum.photos/id/".concat(n-3250).concat("/100/100"),data.author,this.lorem.generateSentences(1)));
      })
    }
  }


}
