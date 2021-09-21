export default interface GetDetailsInterface {
    _embedded: Embedded;
    _links: Links;
    page: Page;
}
export interface Embedded {
    events: (EventsEntity)[];
}
export interface EventsEntity {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images?: (ImagesEntity)[] | null;
    sales: Sales;
    dates: Dates;
    classifications?: (ClassificationsEntity)[] | null;
    promoter: PromotersEntityOrPromoter;
    promoters?: (PromotersEntityOrPromoter)[] | null;
    info: string;
    pleaseNote: string;
    products?: (ProductsEntity)[] | null;
    seatmap: Seatmap;
    accessibility: Accessibility;
    ticketLimit?: TicketLimit | null;
    ageRestrictions: AgeRestrictions;
    _links: Links1;
    _embedded: Embedded1;
    priceRanges?: (PriceRangesEntity)[] | null;
    ticketing: Ticketing;
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
    description?: string | null;
}
export interface Dates {
    start: Start;
    timezone: string;
    status: Status;
    spanMultipleDays: boolean;
    initialStartDate?: InitialStartDate | null;
}
export interface Start {
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
export interface InitialStartDate {
    localDate: string;
    localTime: string;
    dateTime: string;
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
    ticketLimit?: number | null;
}
export interface TicketLimit {
    info: string;
}
export interface AgeRestrictions {
    legalAgeEnforced: boolean;
}
export interface Links1 {
    self: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
    attractions?: (AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast)[] | null;
    venues?: (AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast)[] | null;
}
export interface AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast {
    href: string;
}
export interface Embedded1 {
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
    _links: Links2;
    aliases?: (string)[] | null;
    social?: Social | null;
    ada?: Ada | null;
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
    childRule?: string | null;
}
export interface UpcomingEvents {
    _total: number;
    ticketmaster: number;
    universe?: number | null;
}
export interface Links2 {
    self: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
}
export interface Social {
    twitter: Twitter;
}
export interface Twitter {
    handle: string;
}
export interface Ada {
    adaPhones: string;
    adaCustomCopy: string;
    adaHours: string;
}
export interface AttractionsEntity {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    externalLinks?: ExternalLinks | null;
    aliases?: (string)[] | null;
    images?: (ImagesEntity)[] | null;
    classifications?: (ClassificationsEntity)[] | null;
    upcomingEvents: UpcomingEvents1;
    _links: Links2;
}
export interface ExternalLinks {
    youtube?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    twitter?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    itunes?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    lastfm?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    facebook?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    wiki?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    instagram?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
    musicbrainz?: (MusicbrainzEntity)[] | null;
    homepage?: (TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity)[] | null;
}
export interface TwitterEntityOrFacebookEntityOrWikiEntityOrInstagramEntityOrHomepageEntityOrYoutubeEntityOrItunesEntityOrLastfmEntity {
    url: string;
}
export interface MusicbrainzEntity {
    id: string;
}
export interface UpcomingEvents1 {
    _total: number;
    tmr?: number | null;
    ticketmaster: number;
    //   mfx - de ?: number | null;
    // ticketweb ?: number | null;
    // mfx - ch ?: number | null;
}
export interface PriceRangesEntity {
    type: string;
    currency: string;
    min: number;
    max: number;
}
export interface Ticketing {
    healthCheck: HealthCheck;
    safeTix: SafeTix;
}
export interface HealthCheck {
    summary: string;
    description: string;
    learnMoreUrl: string;
}
export interface SafeTix {
    enabled: boolean;
}
export interface Links {
    first: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
    self: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
    next: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
    last: AttractionsEntityOrVenuesEntityOrSelfOrFirstOrNextOrLast;
}
export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}
