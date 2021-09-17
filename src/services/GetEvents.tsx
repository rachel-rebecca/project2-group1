import Event from "../models/Event";
import axios from "axios";


export default function getEvents (): Promise<Event[]> {
   const key = `${process.env.REACT_APP_API_KEY}`

   
    // return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=48226&apikey=${key}`)
   return axios.get("https://app.ticketmaster.com/discovery/v2/events.json",{
        params: {postalCode: 48226, 
        apikey : key}})
    .then(response => response.data._embedded.events)
}



//hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh
// param for first page is page=0. next page is page=1
// have some way to add 1 each time "load more results" is clicked