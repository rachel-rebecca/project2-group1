import axios from "axios";
import Event from "../models/Event";

const key = `${process.env.REACT_APP_API_KEY}`

// export function getDetails(): Promise<Event[]> {
//   return axios
//     .get("https://app.ticketmaster.com/discovery/v2/events.json")
//     .then((response) => {
//       return response.data.complete;
//     });
// }

export function getDetails(id?: any): Promise<Event> {
  return axios
    .get(`https://app.ticketmaster.com/discovery/v2//events/`, {
      params:{
        apikey: key,
        id: id
      }
    })
    .then((response) => response.data._embedded.events);
}

