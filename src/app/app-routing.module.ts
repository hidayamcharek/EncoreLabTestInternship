import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumListComponent} from "./album-list/album-list.component";
import {AlbumFavComponent} from "./album-fav/album-fav.component";

const routes: Routes = [
  {path: 'album-list', component: AlbumListComponent},
  {path: 'album-fav', component: AlbumFavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
