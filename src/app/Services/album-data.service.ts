import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Album} from "../Models/Album.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumDataService {

  private REST_API_SERVER = "https://picsum.photos";

  constructor(private httpClient: HttpClient) { }

  albums: Album[] = [];

  public getPictures(id: number){
    return this.httpClient.get(this.REST_API_SERVER+'/id/'+id+"/info");
  }

}
