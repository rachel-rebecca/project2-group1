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
  const [faveEvent, setFaveEvent] = useState<Event>({});
  const { addToFaves, remove, favoritesList } = useContext(Favorites);

  function handleClick() {
    history.push(`/details/${id}`);
    // <EventDetails name={name} info={info} dates={dates} type={type} locale={locale}/>;
  }

  function formatDate(){
    let date = dates?.start.localDate;
    // convert date to an array
    let dateArray = date?.split("");
    // slice array off at last two indices to get day value
    let day = dateArray?.slice(-2);
    // slice at index 5 and 7 to get the month
    let month = dateArray?.slice(5,7);
    // slice at 0 and 4 to get the year
    let year = dateArray?.slice(0, 4);
    // slcie leaves them all in new arrays. Need to make them string values.
    let dayString = day?.join("");
    let monthString = month?.join("");
    let yearString = year?.join("");
    // return all values in a new string format
    return monthString + "/" + dayString + "/" + yearString
    }

  return (
    <Card className="card" style={{ width: "18rem" }}>
         <div
        className="starDiv"
        // onClick={(event) => {
        //   // toggleFavorites();
       
        //   event.target.classList.toggle("fas");
        // }}
        onClick={(event) =>{
            const target = event.target as Element;
            target.classList.toggle("fas");
              setFaveEvent({name: name, dates: dates, url: url });
               addToFaves(faveEvent);
          console.log(favoritesList);
        }}
      >
        <i className={"fa-star fa-2x far"}></i>
      </div>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title onClick={handleClick} className="cardTitle">
          <p>{name}</p>
        </Card.Title>
        <Card.Text className="cardDate">{formatDate()}</Card.Text>
        <button className="cardButton">
          <a href={url} className="cardUrl">
            Buy Tickets
          </a>
        </button>
      </Card.Body>
     
    </Card>
  );
}
