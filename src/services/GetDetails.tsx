import axios from "axios";

export function getDetails(): Promise<Event[]> {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json")
    .then((response) => {
      return response.data.complete;
    });
}
