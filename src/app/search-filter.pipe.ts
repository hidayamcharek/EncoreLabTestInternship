import { Pipe, PipeTransform } from '@angular/core';
import {Album} from "./Models/Album.model";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Albums: Album[],searchValue:string): Album[] {
    if(!Albums || !searchValue){
      return Albums
    }
    return Albums.filter(album =>
      album.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      album.id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      album.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
