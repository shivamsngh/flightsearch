import { async, TestBed, inject } from '@angular/core/testing';

import { MockBackend } from '@angular/http/testing';

import {  HttpClient, HttpClientModule, HttpBackend  } from '@angular/common/http';

import { SearchService } from './search.service';

describe('SearchService', () => {

  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService, MockBackend, {
        provide: HttpClient,
        deps: [MockBackend],
        useFactory:
        (backend: HttpBackend) => {
          return new HttpClient(backend);
        }
      }],
      imports: [HttpClientModule]
    });
    TestBed.compileComponents();
    // inject service at start of each test
    service = TestBed.get(SearchService);

    // return fake promise resolves to each call
    spyOn(SearchService.prototype, 'searchFlightAvailability').and.returnValue(Promise.resolve({ flightNo: 101 }));
    spyOn(SearchService.prototype, 'getCitiesListedOnServer').and.returnValue(Promise.resolve({ cities: ['mumbai', 'kolkata'] }));
  });

  it('should be created', () => {
    console.log('serice test1', service);
    expect(service).toBeTruthy();
  });

  it('should run a test that gives the response', (done) => {
    const searchParams = {
      destinationCity: 'kol', originCity: 'mum', departureDate: '2017-11-01', returnDate: '2017-11-01', oneway: true, passengers: 1,
      refine: 10000
    };
    service.searchFlightAvailability(searchParams).subscribe(
      (result) => {
        console.log('serice test2', result);
        expect(result).toBeDefined();
        expect(typeof result).toEqual('object');
        done();
      });
  });

  it('should run a test that gives a object type response', (done) => {
    service.getCitiesListedOnServer().subscribe(
      (result) => {
        console.log('type of', result);
        expect(result).toBeDefined();
        expect(typeof result).toEqual('object');
        done();
      });
  });
});
