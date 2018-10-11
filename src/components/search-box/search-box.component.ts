import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';
import { SearchResponse } from '../../models/search-response';
import { Flights } from '../../models/flights';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Subject, Observable, forkJoin } from 'rxjs';
import 'rxjs/add/operator/take';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

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
  private search$ = new Subject<BookingInformation>();
  private flights$: Observable<Flights[]>;

  searchForm: FormGroup;

  refineSearch = new FormControl();
  isFormValid: boolean = false;
  filteredOriginCities: string[] = []
  filteredDestinationCities: string[] = [];
  totalCitiesListedOnServer: string[] = [];
  search: BookingInformation;
  submitted = false;

  constructor(private find: SearchService, private elementRef: ElementRef, private fb: FormBuilder) {

    this.search = {
      departureDate: '',
      destinationCity: '',
      originCity: '',
      oneway: true,
      passengers: 0,
      refine: 1000
    }

  }

  ngOnInit() {
    //Get all the cities available on initialization of component.
    this.searchForm = this.fb.group(
      {
        originCity: ['', Validators.required],
        destinationCity: ['', Validators.required],
        departureDate: ['', Validators.required],
        returnDate: [''],
        passengers: [1, Validators.required],
        refine: [100]

      }
    )
    this.find.getCitiesListedOnServer()
      .take(1)
      .pipe(catchError(e => <any>window.alert("It seems you are directly serving from file. The app would not be able to perform perfectly due to Cross origin restriction.")))
      .subscribe((cities: string[]) => {
        this.totalCitiesListedOnServer = cities;
        console.log("Total Cities", this.totalCitiesListedOnServer)
      })

    this.flights$ = this.search$.pipe(
      distinctUntilChanged(),
      switchMap(booking => this.find.searchFlightAvailability(booking))
    )

    this.searchForm.get('originCity').valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe(key => this.filterCity(key, true));
    this.searchForm.get('destinationCity').valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe(key => this.filterCity(key, false))
    console.log("search form", this.searchForm)
  }

  // getter for form controls
  get f() { return this.searchForm.controls; }

  /**
   * Selected value from list
   * @param city 
   */
  public valueSelected(city: string, isOrigin: boolean) {
    console.log("selected", city)
    isOrigin ? this.f.originCity.setValue(city, {emitEvent: false}) : this.f.destinationCity.setValue(city, {emitEvent: false});
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
  public onSubmit(): void {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return
    }
    else
      // convert to lowercase
      // this.search.destinationCity = this.searchForm..destinationCity.toLowerCase();
      // this.search.originCity = this.searchForm.originCity.toLowerCase();
      console.log("f is", this.searchForm)
    this.searchClickHandler(this.searchForm.value);
    // this.invalidForm = true;

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
  public searchClickHandler(searchParams: BookingInformation): void {
    console.log("Search click handler params", searchParams)
    this.loadingComponent.emit(true);
    if (!searchParams.returnDate) {
      console.warn("no return")
      this.performSearch(searchParams).subscribe((flights: Flights[]) => {
        let searhResults: SearchResponse = { oneWayFlights: flights, oneway: true, returningFlights: [], bookingInfo: searchParams }
        this.onSearchResults.emit(searhResults);
        this.loadingComponent.emit(false);
      })
    }
    else {
      //first check for one way then for the other
      const returnSearchParams: BookingInformation = {
        originCity: searchParams.destinationCity,
        destinationCity: searchParams.originCity,
        departureDate: searchParams.returnDate,
        refine: searchParams.refine,
        passengers: searchParams.passengers,
        oneway: false
      };

      let onwardJourney = this.performSearch(searchParams);
      let returnJourney = this.performSearch(returnSearchParams);

      forkJoin([onwardJourney, returnJourney]).subscribe(res => {
        let searchResults: SearchResponse = {
          oneWayFlights: res[0],
          oneway: false,
          returningFlights: res[1],
          bookingInfo: searchParams
        };
        this.onSearchResults.emit(searchResults);
        this.loadingComponent.emit(false);
      })

    }
  }

  /**
   * Perform the search from service based on params
   * @param searchParams 
   */
  private performSearch(searchParams: BookingInformation) {
    return this.find.searchFlightAvailability(searchParams)
    // .catch(e => {
    //   console.log("Error in fetching flights.", e);
    //   return Promise.reject(new Array<Flights>())
    // });
  }

  /**
   * On change of slider event
   * autmatically detect flights in range
   * @param e 
   */
  public sliderChangeEvent(e) {
    console.log("Slider changed");
    this.searchClickHandler(this.searchForm.value);
  }
}
