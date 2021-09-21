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

interface Params {
  id: any;
  name: string;
  date: string;
  info: string
}

// {name, dates, locale, type, info}: Event
export default function EventDetails() {
  const [event, setEvent] = useState<GetDetailsInterface>()
  const { id, date, name, info } = useParams<Params>();

  useEffect(() => {
    getDetails(id).then((data) => {
      console.log(data?._embedded?.events)
    })
  }, [setEvent]);



  return (
    <div className="container">
      <h1>Event Details</h1>
      <h2>id:{id}</h2>
      <h2>date:{date}</h2>
      <h2>name:{name}</h2>
      <h2>info:{info}</h2>
    </div>
  );
}

// export default function EventDetails() {
//   return getDetails();
// }
