import Event from "../models/Event";
import axios from "axios";
import Redirect from "../components/Redirect";


const key = `${process.env.REACT_APP_API_KEY}`;

const http = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2/",
  params: {
    apikey: key,
  },
});

const radius = "5000" || undefined;

export default function getEvents(
  keyword?: any,
  name?: any,
  dates?: any,
  postalCode?: any
): Promise<Event[]> {
  return http
    .get("/events.json", {
      params: {
        apikey: key,
        keyword: keyword,
        postalCode: "48226" || postalCode,
        name: name,
        date: dates,
        venueId: undefined, 
        radius: radius,
      },
    })
    .then((response) => response.data._embedded.events)
    // .catch(function (error) {
    //   console.log("we have an error!");
    //   document.location.href = "https://www.google.com"; // **ERROR CODE HERE**
    // });
}

// export function getByLocation(postalCode: any): Promise<any> {
//   return http
//     .get(`/events.json?postalCode=${postalCode}&apikey=${key}`)
//     .then((response) => response.data._embedded.events);
// }

export function getByLocation(latlong: any, keyword: any, startDateTime: any, endDateTime: any, page: any): Promise<any> {
  return http
    .get(`/events.json?keyword=${keyword}&latlong=${latlong}&radius=100&locale=*&startDateTime=${startDateTime}&endDateTime=${endDateTime}&apikey=${key}&page=${page}&sort=distance,asc`)
    .then((response) => response.data._embedded.events)
     .catch(function (error) {
      console.log("we have an error!");
      if(error.response) {
        <Redirect/>
      } else if (error.request) {
        <Redirect />
      }
    //   document.location.href = "https://www.google.com"; // **ERROR CODE HERE**
    });
}

export function getEvent(id?: any): Promise<Event> {
  return http
    .get(`/events/${id}?apikey=${key}&locale=en-us`)
    .then((response) => response.data._embedded.events);
}

//hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh
// param for first page is page=0. next page is page=1
// have some way to add 1 each time "load more results" is clicked
