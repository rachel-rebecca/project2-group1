interface Start {
    localDate: string;
}

export interface Dates {
    start: Start
}

export default interface Event {
    name: string;
    url: string;
    dates: Dates;
}

