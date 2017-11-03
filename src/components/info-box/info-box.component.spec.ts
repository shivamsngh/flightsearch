import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    component.queriedData = {
      originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a div component with class flightTimingInfo`, async(() => {
    const fixture = TestBed.createComponent(InfoBoxComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.flightTimingInfo')).toBeTruthy();
  }));
});
