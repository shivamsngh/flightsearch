import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';
import { SearchResponse } from '../../models/search-response';
import { Flights } from '../../models/flights';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search-box',
  host: { '(document:click)': 'handleClickEvent($event)' },
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() onSearchResults = new EventEmitter<SearchResponse>();
  @Output() loadingComponent = new EventEmitter<boolean>();

  //page variables
  search: BookingInformation;
  isFormValid: boolean = false;
  filteredOriginCities: string[] = []
  filteredDestinationCities: string[] = [];
  totalCitiesListedOnServer: string[] = [];
  invalidForm: boolean = false;

  constructor(private find: SearchService, private elementRef: ElementRef) {
    this.search = {
      destinationCity: '', originCity: '', departureDate: '', returnDate: '', oneway: true, passengers: 1,
      refine: 1000
    }
  }

  ngOnInit() {
    //Get all the cities available on initialization of component.
    this.find.getCitiesListedOnServer().then(cities => {
      this.totalCitiesListedOnServer = cities;
    })
    .catch(e=><any>window.alert("It seems you are directly serving from file. The app would not be able to perform perfectly due to Cross origin restriction."))
  }

  /**
   * Selected value from list
   * @param city 
   */
  public valueSelected(city: string, isOrigin: boolean) {
    console.log("selected", city)
    isOrigin ? this.search.originCity = city : this.search.destinationCity = city;
    isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
  }

  /**
   * Filter cities based on user input
   */
  public filterCity(city: string, isOrigin: boolean) {
    city = city.toLowerCase(); // convert to lowercase
    isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
    console.log("city entered", city);
    if (city) {
      this.totalCitiesListedOnServer.filter((x) => {
        if (x.includes(city))
          isOrigin ? this.filteredOriginCities.push(x) : this.filteredDestinationCities.push(x);
      });
    }
  }

  /**
   * Check validation of form and proceed for search
   * @param formInputs 
   */
  public onSubmit(formInputs): void {
    console.log(formInputs);
    if (formInputs.form.valid) {
      this.invalidForm = false;
      // convert to lowercase
      this.search.destinationCity = this.search.destinationCity.toLowerCase();
      this.search.originCity = this.search.originCity.toLowerCase();
      this.clickSearchButton(this.search);
    }
    else
      this.invalidForm = true;
  }

  /**
   * Event handler for clicks outside of the 
   * suggestions component.
   * @param event 
   */
  public handleClickEvent(event: any) {
    let clickedTarget = event.target;
    let inComponent = false;
    do {
      if (clickedTarget === this.elementRef.nativeElement) {
        inComponent = true;
      }
      clickedTarget = clickedTarget.parentNode;
    }
    while (clickedTarget);
    if (!inComponent) {
      this.filteredDestinationCities = [];
      this.filteredOriginCities = []
    }
  }
  /**
   * 
   * Updates the booking type i.e one way/ two way flight.
   * @param oneway 
   */
  public updateBookingType(oneway: boolean): void {
    this.search.oneway = oneway;
  }

  /**
   * Search for flights based on parameters provided.
   * The magic happens here :)
   * @param searchParams 
   */
  public clickSearchButton(searchParams: BookingInformation): void {
    this.loadingComponent.emit(true);
    if (searchParams.oneway) {
      this.performSearch(searchParams).then((flights) => {
        let searhResults: SearchResponse = { oneWayFlights: flights, oneway: true, returningFlights: [], bookingInfo: searchParams }
        this.onSearchResults.emit(searhResults);
        this.loadingComponent.emit(false);
      })
        .catch(e => console.log("Error in performing search", e));
    }
    else {
      //first check for one way then for the other
      this.performSearch(searchParams).then((oneWayFlights) => {
        let returnSearchParams: BookingInformation = {
          originCity: searchParams.destinationCity,
          destinationCity: searchParams.originCity,
          departureDate: searchParams.returnDate,
          refine: searchParams.refine,
          passengers: searchParams.passengers,
          oneway: true
        };
        this.performSearch(returnSearchParams).then((returningFlights) => {
          let searchResults: SearchResponse = {
            oneWayFlights: oneWayFlights,
            oneway: false,
            returningFlights: returningFlights,
            bookingInfo: searchParams
          };
          this.onSearchResults.emit(searchResults);
          this.loadingComponent.emit(false);
        })
          .catch(e => console.log("Error in performing search", e));
      })
      .catch(e => console.log("Error in performing search", e));

    }
  }

  /**
   * Perform the search from service based on params
   * @param searchParams 
   */
  private performSearch(searchParams: BookingInformation) {
    return this.find.searchFlightAvailability(searchParams)
      .then((flights: Flights[]) => {
        return flights;
      })
      .catch(e => {
        console.log("Error in fetching flights.", e);
        return Promise.reject(new Array<Flights>())
      });
  }

  /**
   * On change of slider event
   * autmatically detect flights in range
   * @param e 
   */
  public sliderChangeEvent(e) {
    console.log("Slider changed");
    this.clickSearchButton(this.search);
  }
}
