import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//bas Application
import { AppComponent } from './app.component';

//components
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { InfoBoxComponent } from '../components/info-box/info-box.component';
import { FlightDetailsCardComponent } from '../components/flight-details-card/flight-details-card.component';

//services
import { SearchService } from '../services/search.service';
import { MapViewComponent } from '../components/map-view/map-view.component';

export function providers() {
  return [SearchService];
}

export function imports() {
  return [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ];
}

export function declarations() {
  return [
    AppComponent,
    SearchBoxComponent,
    InfoBoxComponent,
    FlightDetailsCardComponent,
    MapViewComponent
  ];
}

@NgModule({
  declarations: declarations(),
  imports: imports(),
  providers: providers(),
  bootstrap: [AppComponent]
})
export class AppModule { }
