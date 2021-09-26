import { FaveEvent, Favorites } from "../context/FavoritesProvider";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Card } from "react-bootstrap";

export default function FavoriteRow({ name, url, date, id }: FaveEvent) {
  // useContext import from FavoritesProvider
  const { addToFaves, remove, favoritesList } = useContext(Favorites);

  const[ID, setID] = useState<any>();

  const history = useHistory();
  // function that routes use to details page using id value.
  function handleClick() {
    history.push(`/details/${id}`);
  }

  // format date function
  function formatDate() {
    // convert date to an array
    let dateArray = date?.split("");
    // slice array off at last two indices to get day value
    let day = dateArray?.slice(-2);
    // slice at index 5 and 7 to get the month
    let month = dateArray?.slice(5, 7);
    // slice at 0 and 4 to get the year
    let year = dateArray?.slice(0, 4);
    // slcie leaves them all in new arrays. Need to make them string values.
    let dayString = day?.join("");
    let monthString = month?.join("");
    let yearString = year?.join("");
    // return all values in a new string format
    return monthString + "/" + dayString + "/" + yearString;
  }

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <div
        className="starDiv"
        onClick={(event) => {
          event.preventDefault();
          const target = event.target as Element;
          target.classList.toggle("fas");
          setID(id);
          remove(ID);
        }}
      >
        <i className={"fa-star fa-2x far"}></i>
      </div>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="cardBody">
        <Card.Title onClick={handleClick} className="cardTitle">
          <p>{name}</p>
          <p className="cardDate">{formatDate()}</p>
        </Card.Title>
        <button className="cardButton">
          <a href={url} className="cardUrl">
            Buy Tickets
          </a>
        </button>
      </Card.Body>
    </Card>
  );
}
