import Event from "../models/Event";
import axios from "axios";

export default function getEvents (): Promise<Event[]> {
    const key = process.env.REACT_APP_API_KEY


    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=48226&apikey=")
    .then(response => response.data._embedded.events)
}