import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

/**
 * @class
 */
export class TracksService {

  results; 

  /**
   * 
   * @param _http uses JSONP from HttpClient module to request
   * data from cross-origin domain
   */
  constructor(private _http: HttpClient) { }

  /**
   * JSONP request made to another domain to retrieve data
   * 
   * @param albumID {number} Id of current Album being displayed
   * 
   * @returns returns the retrived track list information
   */
  getAlbumTracks(albumID : number){

    let albumURL = "https://stg-resque.hakuapp.com/songs.json?album_id="+ albumID;
    this._http.jsonp(albumURL, 'callback').pipe(map(res => console.log(res)));
    return this._http.jsonp(albumURL, 'callback').pipe(map(res => this.results = res))

  }
}
