import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { AlbumsService } from './../services/albums.service';
import { TrackListingComponent } from '../track-listing/track-listing.component';

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css']
})

/**
 * @class
 */
export class AlbumListingComponent implements OnInit {

  @ViewChild(TrackListingComponent, {static: false}) trackListing :TrackListingComponent;

  albums;

  /**
   * @constructor
   */
  constructor(private http: Http, private albumsService : AlbumsService) { }

  /**
   * On initialization, will retrieve list of albums from AlbumService
   * 
   * return the retrived array of objects 
   */
  ngOnInit() {
    this.albumsService.getAllAlbums()
        .subscribe(
          data => this.albums = data
        );
  }

  /**
   * After loading the component, retrieve the track list by 
   * updaing current AlbumId that is being displayed
   */

  ngAfterViewInit(){
    this.updateAlbumID(3);
  }

  /**
   * 
   * @param albumID {number} Id of current Album on display
   * 
   * @returns array of objects with list of tracks for the album
   */
  updateAlbumID(albumID : number){
    this.trackListing.getTracks(albumID);
  }

  /**
   * Select the next item to right side in carousel
   * 
   * leftmost item will be removed and appended to end of the list
   * 
   * Id of new Album being displayed will be sent to updateAlbumID
   * to display tracks of that album
   */
  shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    if (boxes.length > 5) {
        tmpNode.classList.add("box--hide");
        boxes[5].className = "box move-to-position5-from-left";
    }
    boxes[1].className = "box move-to-position1-from-left";
    boxes[2].className = "box move-to-position2-from-left";
    boxes[3].className = "box move-to-position3-from-left active";
    boxes[4].className = "box move-to-position4-from-left";
    boxes[0].remove();
    this.updateAlbumID( boxes[3].attributes['albumId'].value );
    document.querySelector(".cards__container").appendChild(tmpNode);
    
  }

  
  /**
   * Select the next item to left side in carousel
   * 
   * rightmost item will removed and added to begining of the list
   * 
   * Id of new Album being displayed will be sent to updateAlbumID
   * to display tracks of that album
   */
  shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[4].className = "box move-out-from-right";
    
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
        boxes[4].className = "box box--hide";
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".cards__container");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "box move-to-position1-from-right";
    boxes[0].className = "box move-to-position2-from-right";
    boxes[1].className = "box move-to-position3-from-right active";
    boxes[2].className = "box move-to-position4-from-right";
    boxes[3].className = "box move-to-position5-from-right";
    this.updateAlbumID( boxes[1].attributes['albumId'].value );
  }
}