import { Component, OnInit, Input } from '@angular/core';
import { TracksService } from './../services/tracks.service'

@Component({
  selector: 'app-track-listing',
  templateUrl: './track-listing.component.html',
  styleUrls: ['./track-listing.component.css']
})

/**
 * @class 
 */
export class TrackListingComponent implements OnInit {

  @Input('album_index') albumID: number;
  tracks;

  /**
   * @constructor
   * @param tracksService use TracksService to retrieve tracks for album
   */
  constructor(private tracksService : TracksService) { }

  ngOnInit() { }

  /**
   * Calls TrackService method to retrieve all tracks
   * 
   * subscribe to TrackService to receive data
   */
  getTracks(albumID){
    this.tracksService.getAlbumTracks(albumID)
      .subscribe(
          data => this.tracks = data
      );
  }

}
