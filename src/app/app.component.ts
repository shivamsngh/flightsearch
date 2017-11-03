import { Component } from '@angular/core';
import { BookingInformation } from '../models/booking-info';
import { SearchResponse } from '../models/search-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
  bookingInfo: BookingInformation;
  searchResults: SearchResponse;
  loading: boolean = false;
  fly: boolean = false;

  constructor() {
    this.bookingInfo = {
      originCity: '',
      destinationCity: '',
      departureDate: '',
      returnDate: '',
      passengers: 1,
      oneway: true,
      refine: 1000
    };
    this.searchResults = {
      oneWayFlights: [],
      returningFlights: [],
      oneway: true,
      bookingInfo: this.bookingInfo
    };
  }

  /**
   * Listener for EventEmitter on child pages.
   * @param searchResults
   */
  public updateInputParams(searchResults: SearchResponse) {
    console.log('Ok got that emitted value mate');
    this.bookingInfo = searchResults.bookingInfo;
    this.searchResults = searchResults;
  }

  public swapLoading(loading: boolean) {
    console.log("Swapping", loading)
    this.loading = loading;
  }

  /**
   * The easter egg animation for
   * adding fly class to element
   * @param fly 
   */
  public updateFlying(fly: boolean) {
    this.fly = fly;
  }
}
