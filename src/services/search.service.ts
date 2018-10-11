import { Injectable } from '@angular/core';
import { Flights } from '../models/flights';
import { BookingInformation } from '../models/booking-info';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

const apiUrl = `./assets/data/flight-data.json`;

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  /**
   * Search for availablity of flight from server(JSON data in this case)
   * @param searchParams;
   */
  public searchFlightAvailability(searchParams: BookingInformation): Observable<Flights[]> {
    // bring the data
    // sort the data
    // search the data
    console.warn("params in service", searchParams)
    return this.http.get(apiUrl)
      .pipe(
        map(data => this.searchAndSort(data, searchParams)),
        catchError(error => Observable.throw(error))
      )
  }

  /**
   * Gets the cities available for search from server.
   * NOTE: Usually server side code provides a REST api
   * to get teh cities availablr for search thereby reducing 
   * client side dependency. Thin client approach :)
   */
  public getCitiesListedOnServer(): Observable<string[]> {
    return this.http.get(apiUrl)
      .pipe(map(data => this.extractCities(data)), catchError(error => Observable.throw(error)))
  }

  /**
   * Extracts and returns filtered array of cities,
   * available on server.
   * @param flightData;
   */
  private extractCities(flightData: any): string[] {
    const allCities: string[] = [];
    flightData.flights.map(x => {
      allCities.push(x.origin);
      allCities.push(x.destination);
    });

    const distinctCities = allCities.filter((x, index, originalArr) => {
      return index === originalArr.indexOf(x);
    });
    return distinctCities;
  }

  /**
   * Sorts the incoming data and sends for searching
   * @param data;
   */
  private searchAndSort(data: any, searchParams: BookingInformation): Flights[] {
    console.log('raw data"', data);
    data.flights.map(x => x.amount = parseInt(x.amount));
    const allFlights: Flights[] = data.flights;
    return this.getMatchingItemsFromArray(this.sortFlightArray(allFlights), searchParams);
  }

  /**
   * Sort the flight data w.r.t amount
   * @param flightData;
   */
  private sortFlightArray(flightData: Flights[]): Flights[] {
    flightData.sort((x, y) => {
      return x.amount - y.amount;
    });
    console.log('sorted', flightData);
    return flightData;
  }

  /**
   * Returns a new array of matching items based on search.
   * @param sortedFlightData;
   * @param searchParams;
   */
  private getMatchingItemsFromArray(sortedFlightData: Flights[], searchParams: BookingInformation): Flights[] {
    const filteredItmes: Flights[] = [];
    // create a new array which contains the items that are ;
    // in our range to make. Makes sense , eases pain :P
    const dataInRange: Flights[] = [];
    sortedFlightData.map((x) => {
      x.amount <= searchParams.refine ? dataInRange.push(x) : console.log('Not in range');
    });
    console.log('data', dataInRange);
    console.warn('SearchParams in service', searchParams);

    dataInRange.map((x) => {
      if (Date.parse(x.date.split(' ')[0]) === Date.parse(searchParams.departureDate) && x.origin === searchParams.originCity
        && x.destination === searchParams.destinationCity) {
        console.log('true getmatch');
        filteredItmes.push(x);
      }
    });
    console.log('filter', filteredItmes);
    return filteredItmes;
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };
}
