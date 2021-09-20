import Event from "../models/Event";
import axios from "axios";

const key = `${process.env.REACT_APP_API_KEY}`;

const http = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2/",
  params: {
    apikey: key,
  },
});

export default function getEvents(postalCode?: any, name?: any, dates?: any): Promise<Event[]> {
  // return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=48226&apikey=${key}`)
  //    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json",{
  //         params: {postalCode: 48226,
  //         page: 0,
  //         apikey : key}})

  //     .then(response => response.data._embedded.events)

  return http
    .get("/events.json", {
      params: {
        postalCode: postalCode,
        name: name,
        date: dates,
        apikey: key,
      },
    })
    .then((response) => response.data._embedded.events);
}

export function getByLocation(postalCode: any): Promise<any> {
  return http
    .get(`/events.json?postalCode=${postalCode}&apikey=${key}`)
    .then((response) => response.data._embedded.events);
}

export function getEvent(id?: any): Promise<Event> {
  return http
    .get(`/events/${id}?apikey=${key}&locale=en-us`)
    .then((response) => response.data._embedded.events);
}

//hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh
// param for first page is page=0. next page is page=1
// have some way to add 1 each time "load more results" is clicked
