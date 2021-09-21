import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Event from "../models/Event";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import ResultRow from "../subcomponents/ResultRow";
import { getDetails } from "../services/GetDetails";

interface Params {
    id: any;
}

// {name, dates, locale, type, info}: Event
export default function EventDetails() {
    const[event, setEvent] = useState<Event>()
    const{id} = useParams<Params>();

    useEffect(() => {
        getDetails(id).then((data) => {
            console.log(data) 
        })  
    }, [setEvent]);

  return (
    <div className="container">
      <h1>Event Details</h1>
      {/* <h2>{event.name}</h2> */}
      {/* <h3>{dates?.start.localDate}</h3>
      <p>{event?.locale}</p>
      <p>{type}</p>
      <p>{info}</p>) */}
    </div>
  );
}

// export default function EventDetails() {
//   return getDetails();
// }
