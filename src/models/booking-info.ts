export interface BookingInformation {
    originCity: string;
    destinationCity: string;
    departureDate: string;
    returnDate?: string;
    passengers: number;
    oneway: boolean;
    refine?: number;
};