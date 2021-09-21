import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Event from "../models/Event";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import ResultRow from "../subcomponents/ResultRow";
import { getDetails } from "../services/GetDetails";
import { Embedded } from "../models/Event"
import { VenuesEntity } from "../models/Event"
import GetDetailsInterface from "../models/GetDetailsInterface"
import { start } from "repl";
import { Link } from "react-router-dom";


interface Params {
  id: any;
  name: string;
  date: string;
  info: string
}

// {name, dates, locale, type, info}: Event
export default function EventDetails() {
  const [event, setEvent] = useState<GetDetailsInterface>()
  const [eventName, setEventName] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  // const [goUrl, setGoUrl] = useState(() => { eventUrl })
  const [eventDate, setEventDate] = useState("");
  const { id, date, name, info } = useParams<Params>();

  useEffect(() => {
    getDetails(id).then((data) => {
      if (data && data._embedded && data._embedded.events && data._embedded.events[0]) {

        console.log(data._embedded.events[0]);
        setEventName(data._embedded.events[0].name);
        setEventUrl(data._embedded.events[0].url);
        setEventDate(data._embedded.events[0].dates.start.localDate);
      }
    })
  }, [setEvent]);



  return (
    <div className="container">
      <h1>Event Details:</h1>
      {/* <h2>id:{id}</h2> */}
      <h2>{eventName}</h2>
      <h2>Date: {eventDate}</h2>
      {/* <Link to={eventUrl} className="btn btn-primary">Buy Tickets</Link>  <-- ##I was trying to make a button, but failing -steph##  */}
      <a href={eventUrl}>Buy Tickets</a>
    </div>
  );
}

// export default function EventDetails() {
//   return getDetails();
// }
