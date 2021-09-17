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


export default interface Event {
    name: string;
    url: string;
    dates: Dates;
    classifications?: Genre;
}


