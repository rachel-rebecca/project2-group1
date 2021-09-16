import Event from "../models/Event";
import axios from "axios";

export default function getEvents (): Promise<Event[]> {
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=48226&apikey=hGWHw80UqtonvVa5RfP9mPRnG5sdbhnh")
    .then(response => response.data._embedded.events)
}