import axios from "axios";
import { start } from "repl";
import Event from "../models/Event";
import GetDetailsInterface from "../models/GetDetailsInterface";
import Redirect from "../components/Redirect";

const key = `${process.env.REACT_APP_API_KEY}`

// export function getDetails(): Promise<Event[]> {
//   return axios
//     .get("https://app.ticketmaster.com/discovery/v2/events.json")
//     .then((response) => {
//       return response.data.complete;
//     });
// }

export function getDetails(id?: any, date?: any, time?: any, info?: any): Promise<GetDetailsInterface> {
  return axios
    .get(`https://app.ticketmaster.com/discovery/v2/events/`, {
      params: {
        apikey: key,
        id: id,
        // name: name,
        date: date,
        info: info
        // localTime: localTime
      }
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log("we have an error!");
      if(error.response) {
        <Redirect/>
      } else if (error.request) {
        <Redirect />
    }
  });
}

