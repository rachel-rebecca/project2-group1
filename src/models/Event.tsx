interface Start {
    localDate: string;
}

export interface Dates {
    start: Start
}

export interface ID {
    id: string | undefined;
}

interface Genre {
    genre: ID;
}

interface PostalCode {
    postalCode: number;
}

interface Venues {
    venues: PostalCode;
}




export default interface Event {
    name?: string | undefined;
    id?: string | undefined;
    url?: string | undefined;
    dates?: Dates | undefined;
    classifications?: Genre;
    _embedded?: Venues;

}


