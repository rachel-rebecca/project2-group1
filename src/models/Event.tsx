interface Start {
    localDate: string;
}

export interface Dates {
    start: Start
}

interface Genre {
    id: string;
}

interface Classifications {
    genre: Genre;
}


export default interface Event {
    name: string;
    url: string;
    dates: Dates;
    // classifications: Classifications;
}

