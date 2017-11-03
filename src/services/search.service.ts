import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Flights } from '../models/flights';
import { BookingInformation } from '../models/booking-info';
import 'rxjs/add/operator/toPromise';

const apiUrl = `./assets/data/flight-data.json`;

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  /**
   * Search for availablity of flight from server(JSON data in this case)
   * @param searchParams;
   */
  public searchFlightAvailability(searchParams: BookingInformation): Promise<Flights[]> {
    // bring the data
    // sort the data
    // search the data
    return this.http.get(apiUrl)
      .toPromise()
      .then(data => { return this.searchAndSort(data.json(), searchParams); })
      .catch(Promise.reject);
  }

  /**
   * Gets the cities available for search from server.
   * NOTE: Usually server side code provides a REST api
   * to get teh cities availablr for search thereby reducing 
   * client side dependency. Thin client approach :)
   */
  public getCitiesListedOnServer(): Promise<string[]> {
    return this.http.get(apiUrl)
      .toPromise()
      .then(data => { return this.extractCities(data.json()); })
      .catch(Promise.reject);
  }

  /**
   * Extracts and returns filtered array of cities,
   * available on server.
   * @param flightData;
   */
  public extractCities(flightData: any): Promise<string[]> {
    const allCities: string[] = [];
    flightData.flights.map(x => {
      allCities.push(x.origin);
      allCities.push(x.destination);
    });

    const distinctCities = allCities.filter((x, index, originalArr) => {
      return index === originalArr.indexOf(x);
    });
    return Promise.resolve(distinctCities);
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
}
