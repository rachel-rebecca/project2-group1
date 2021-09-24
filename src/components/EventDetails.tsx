import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Event from "../models/Event";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import ResultRow from "../subcomponents/ResultRow";
import { getDetails } from "../services/GetDetails";
import { Embedded } from "../models/Event";
import { VenuesEntity } from "../models/Event";
import GetDetailsInterface from "../models/GetDetailsInterface";
import { start } from "repl";
import { Link } from "react-router-dom";
import "../App.css";

interface Params {
  id: any;
}

// {name, dates, locale, type, info}: Event
export default function EventDetails() {
  const [event, setEvent] = useState<GetDetailsInterface>();
  const [eventName, setEventName] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [info, setInfo] = useState("");
  const [access, setAccess] = useState("");
  const [healthcheck, setHealthCheck] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [genre, setGenre] = useState("");
  const [venue, setVenue] = useState("");
  const { id } = useParams<Params>();

  useEffect(() => {
    getDetails(id).then((data) => {
      if (
        data &&
        data._embedded &&
        data._embedded.events &&
        data._embedded.events[0]
      ) {
        console.log(data._embedded.events[0]);
        setEventName(data._embedded.events[0].name);
        setEventUrl(data._embedded.events[0].url);
        setEventDate(data._embedded.events[0].dates.start.localDate);
        setEventTime(data._embedded.events[0].dates.start.localTime);
        setInfo(data._embedded.events[0].info);
        setAccess(data._embedded.events[0].accessibility.info);
        setGenre(data._embedded.events[0].classifications[0].genre.name);
        setVenue(data._embedded.events[0]._embedded.venues[0].name);
        if (
          data._embedded.events[0].ticketing?.healthCheck?.description.length >
          0
        ) {
          setHealthCheck(
            data._embedded.events[0].ticketing?.healthCheck?.description
          );
        } else {
          setHealthCheck("None");
        }
      }
    });
  }, [setEvent]);

  useEffect(() => {
    getDetails(id).then((data) => {
      console.log(data);
    });
  }, [setEvent]);

  return (
    <div className="container eventDetailsDiv">
      <h2 className="EventName">
        <strong>{eventName}</strong>
      </h2>
      <h3>Venue: {venue}</h3>
      <span className="EventDate">Date: {eventDate}</span>
      <span>Time: {eventTime}</span>

      <details>
        <summary className="Summary"> More Info</summary>
        <p>
          <strong>Note:</strong> {info}{" "}
        </p>
        <p>
          <strong>Accessibility:</strong> {access}
        </p>
        <p>
          <strong>Healthcheck:</strong> {healthcheck}
        </p>
        <p>
          <strong>Genre: </strong>
          {genre}
        </p>
      </details>
      <button>
        <a href={eventUrl} className="buyTickets">
          Buy Tickets
        </a>
      </button>
    </div>
  );
}

// export default function EventDetails() {
//   return getDetails();
// }
