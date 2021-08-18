import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumFavComponent } from './album-fav/album-fav.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchFilterPipe,
    AppComponent,
    AlbumListComponent,
    AlbumFavComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
