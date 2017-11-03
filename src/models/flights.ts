export interface Flights {
    flightNo: string;
    origin: string;
    destination: string;
    time: ArrDepTime;
    date: string;
    amount: number;
};

interface ArrDepTime {
    depart: string;
    arrive: string;
};