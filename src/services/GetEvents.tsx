import Event from "../models/Event";
import axios from "axios";

export default function GetQuote (): Promise<Event[]> {
    return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data)
}