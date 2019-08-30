import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { HttpModule  } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListingComponent } from './album-listing/album-listing.component';

import { AlbumsService } from './services/albums.service';
import { TracksService } from './services/tracks.service';
import { TrackListingComponent } from './track-listing/track-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListingComponent,
    TrackListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule, 
    FormsModule
  ],
  providers: [AlbumsService, TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
