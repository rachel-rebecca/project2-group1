import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Event from "../models/Event";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import ResultRow from "../subcomponents/ResultRow";
import { getDetails } from "../services/GetDetails";

// export default function EventDetails({
//   handleClick,
// }: {
//   handleClick: (name: any, dates: any, locale: any, type: any) => void;
// }) {
//   return (
//     <div className="container">
//       <h1>Event Details</h1>
//       <h2>{name}</h2>
//       <h3>{dates.start.localDate}</h3>
//       <p>{locale}</p>
//       <p>{type}</p>)
//     </div>
//   );
// }

export default function EventDetails() {
  return getDetails();
}
