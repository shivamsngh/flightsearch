import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//bas Application
import { AppComponent } from './app.component';

//components
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { InfoBoxComponent } from '../components/info-box/info-box.component';
import { FlightDetailsCardComponent } from '../components/flight-details-card/flight-details-card.component';

//services
import { SearchService } from '../services/search.service';

export function providers() {
  return [SearchService];
}

export function imports() {
  return [
    BrowserModule,
    FormsModule,
    HttpModule
  ];
}

export function declarations() {
  return [
    AppComponent,
    SearchBoxComponent,
    InfoBoxComponent,
    FlightDetailsCardComponent
  ];
}

@NgModule({
  declarations: declarations(),
  imports: imports(),
  providers: providers(),
  bootstrap: [AppComponent]
})
export class AppModule { }
