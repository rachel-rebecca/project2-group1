

// export interface Dates {
//     start: Start
// }

// export interface ID {
//     id: string | undefined;
// }

// interface Genre {
//     genre: ID;
// }

// interface PostalCode {
//     postalCode: number;
// }

// interface Venues {
//     venues: PostalCode;
// }




// export default interface Event {
//     name?: string | undefined;
//     id?: string | undefined;
//     url?: string | undefined;
//     dates?: Dates | undefined;
//     classifications?: Genre;
//     _embedded?: Venues;
//     locale?: string | undefined;
//     info?: string | undefined;
//     pleaseNote?: string | undefined;

// }

export default interface Event {
    name?: string;
    type?: string;
    id?: string;
    test?: boolean;
    url?: string;
    locale?: string;
    images?: (ImagesEntity)[] | null;
    sales?: Sales;
    dates?: Dates;
    classifications?: (ClassificationsEntity)[] | null;
    promoter?: PromotersEntityOrPromoter;
    promoters?: (PromotersEntityOrPromoter)[] | null;
    info?: string;
    pleaseNote?: string;
    products?: (ProductsEntity)[] | null;
    seatmap?: Seatmap;
    accessibility?: Accessibility;
    ticketLimit?: TicketLimit;
    ageRestrictions?: AgeRestrictions;
    _links?: Links;
    _embedded?: Embedded;
  }
  export interface ImagesEntity {
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }
  export interface Sales {
    public: Public;
    presales?: (PresalesEntity)[] | null;
  }
  export interface Public {
    startDateTime: string;
    startTBD: boolean;
    startTBA: boolean;
    endDateTime: string;
  }
  export interface PresalesEntity {
    startDateTime: string;
    endDateTime: string;
    name: string;
  }
  export interface Dates {
    start: Starts;
    timezone: string;
    status: Status;
    spanMultipleDays: boolean;
  }
  export interface Starts {
    localDate: string;
    localTime: string;
    dateTime: string;
    dateTBD: boolean;
    dateTBA: boolean;
    timeTBA: boolean;
    noSpecificTime: boolean;
  }
  export interface Status {
    code: string;
  }
  export interface ClassificationsEntity {
    primary: boolean;
    segment: SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity;
    genre: SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity;
    subGenre: SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity;
    type: SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity;
    subType: SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity;
    family: boolean;
  }
  export interface SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity {
    id: string;
    name: string;
  }
  export interface PromotersEntityOrPromoter {
    id: string;
    name: string;
    description: string;
  }
  export interface ProductsEntity {
    name: string;
    id: string;
    url: string;
    type: string;
    classifications?: (ClassificationsEntity)[] | null;
  }
  export interface Seatmap {
    staticUrl: string;
  }
  export interface Accessibility {
    info: string;
    ticketLimit: number;
  }
  export interface TicketLimit {
    info: string;
  }
  export interface AgeRestrictions {
    legalAgeEnforced: boolean;
  }
  export interface Links {
    self: AttractionsEntityOrVenuesEntityOrSelf;
    attractions?: (AttractionsEntityOrVenuesEntityOrSelf)[] | null;
    venues?: (AttractionsEntityOrVenuesEntityOrSelf)[] | null;
  }
  export interface AttractionsEntityOrVenuesEntityOrSelf {
    href: string;
  }
  export interface Embedded {
    venues?: (VenuesEntity)[] | null;
    attractions?: (AttractionsEntity)[] | null;
  }
  export interface VenuesEntity {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images?: (ImagesEntity1)[] | null;
    postalCode: string;
    timezone: string;
    city: City;
    state: State;
    country: Country;
    address: Address;
    location: Location;
    markets?: (SegmentOrGenreOrSubGenreOrTypeOrSubTypeOrMarketsEntity)[] | null;
    dmas?: (DmasEntity)[] | null;
    boxOfficeInfo: BoxOfficeInfo;
    parkingDetail: string;
    accessibleSeatingDetail: string;
    generalInfo: GeneralInfo;
    upcomingEvents: UpcomingEvents;
    _links: Links1;
  }
  export interface ImagesEntity1 {
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
    attribution?: string | null;
  }
  export interface City {
    name: string;
  }
  export interface State {
    name: string;
    stateCode: string;
  }
  export interface Country {
    name: string;
    countryCode: string;
  }
  export interface Address {
    line1: string;
  }
  export interface Location {
    longitude: string;
    latitude: string;
  }
  export interface DmasEntity {
    id: number;
  }
  export interface BoxOfficeInfo {
    phoneNumberDetail: string;
    openHoursDetail: string;
    acceptedPaymentDetail: string;
    willCallDetail: string;
  }
  export interface GeneralInfo {
    generalRule: string;
    childRule: string;
  }
  export interface UpcomingEvents {
    _total: number;
    ticketmaster: number;
  }
  export interface Links1 {
    self: AttractionsEntityOrVenuesEntityOrSelf;
  }
  export interface AttractionsEntity {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    externalLinks: ExternalLinks;
    aliases?: (string)[] | null;
    images?: (ImagesEntity)[] | null;
    classifications?: (ClassificationsEntity)[] | null;
    upcomingEvents: UpcomingEvents1;
    _links: Links1;
  }
  export interface ExternalLinks {
    twitter?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity)[] | null;
    facebook?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity)[] | null;
    wiki?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity)[] | null;
    instagram?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity)[] | null;
    homepage?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity)[] | null;
  }
  export interface TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntity {
    url: string;
  }
  export interface UpcomingEvents1 {
    _total: number;
    tmr: number;
    ticketmaster: number;
  }
  


