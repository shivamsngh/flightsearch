import { Flights } from '../models/flights';
import { BookingInformation } from '../models/booking-info';

export interface SearchResponse {
    oneWayFlights: Flights[];
    returningFlights?: Flights[];
    oneway: boolean;
    bookingInfo: BookingInformation;
};