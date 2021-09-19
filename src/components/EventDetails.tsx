import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getEvents, { getEvent } from "../services/GetEvents";
import Event from "../models/Event";

export default function EventDetails({ name, type, id, locale, dates }: Event) {
  return (
    <div className="container">
      <h1>Event Details</h1>
      <h2>{name}</h2>
      <h3>{dates?.start.localDate}</h3>
      <p>{locale}</p>
      <p>{type}</p>

      <button
        onClick={() => {
          getEvents();
        }}
      >
        Get axios response
      </button>
    </div>
  );
}
