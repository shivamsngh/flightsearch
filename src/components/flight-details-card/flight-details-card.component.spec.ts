import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import dependent components
import { FlightDetailsCardComponent } from './flight-details-card.component';
import { InfoBoxComponent } from '../info-box/info-box.component';

describe('FlightDetailsCardComponent', () => {
  let component: FlightDetailsCardComponent;
  let fixture: ComponentFixture<FlightDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDetailsCardComponent, InfoBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsCardComponent);
    component = fixture.componentInstance;
    component.searchResults = {
      bookingInfo: {
        originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
      },
      oneway: true, oneWayFlights: [], returningFlights: []
    }
    component.bookingIcons = `./assets/img/aero.jpg`;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a info-box component`, async(() => {
    const fixture = TestBed.createComponent(FlightDetailsCardComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('info-box')).toBeDefined();
  }));
});
