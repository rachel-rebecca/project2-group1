import Event from "../models/Event";
import Results from "../components/Results";
import { Card } from "react-bootstrap";
import { Dates } from "../models/Event";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import EventDetails from "../components/EventDetails";
import { Favorites } from "../context/FavoritesProvider";

export default function ResultRow({
  id,
  name,
  url,
  dates,
  classifications,
  info,
  pleaseNote,
  _embedded,
  locale,
  type,
}: Event) {
  const history = useHistory();
  const [Id, setId] = useState<string>();
  const [event, setEvent] = useState<Event>();
  const { addToFaves, remove, favoritesList } = useContext(Favorites);

  function handleClick() {
    history.push(`/details/${id}`);
    // <EventDetails name={name} info={info} dates={dates} type={type} locale={locale}/>;
  }

  function toggleFavorites() {
    document.querySelector(".fa-2x")?.classList.toggle("fas");
  }

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title onClick={handleClick} className="cardTitle">
          <p>{name}</p>
        </Card.Title>
        <Card.Text className="cardDate">{dates?.start.localDate}</Card.Text>
        <button className="cardButton">
          <a href={url} className="cardUrl">
            Buy Tickets
          </a>
        </button>
      </Card.Body>
      <div
        className="starDiv"
        // onClick={(event) => {
        //   // toggleFavorites();
        //   addToFaves(event);
        //   console.log(favoritesList);
        //   event.target.classList.toggle("fas");
        // }}
        onClick={(event) =>{
            const target = event.target as Element;
            target.classList.toggle("fas")
        }}
      >
        <i className={"fa-star fa-2x far"}></i>
      </div>
    </Card>
  );
}
