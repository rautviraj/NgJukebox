import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

/**
 * @class
 */
export class AlbumsService {
  results;

  /**
   * @constructor
   * 
   * @param _http uses JSONP from HttpClient module to request
   * data from cross-origin domain
   */
  constructor(private _http: HttpClient) { }

  /**
   * Retrieves list of albums and information from server
   * 
   * @returns returns all albums data
   */
  getAllAlbums(){
    let albumURL = "https://stg-resque.hakuapp.com/albums.json";
    return this._http.jsonp(albumURL, 'callback').pipe(map(res => this.results = res))
  }

}
