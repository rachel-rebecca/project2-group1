import { FaveEvent, Favorites } from "../context/FavoritesProvider";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Card } from "react-bootstrap";
import heart from "../images/Untitled 27.svg"

export default function FavoriteRow({ name, url, date, id}: FaveEvent) {
  // useContext import from FavoritesProvider
  const { addToFaves, remove, favoritesList } = useContext(Favorites);
  // set clicked to true for defualt.
  const[clicked, setClicked] = useState(true);

//   function usePersistedState(key: any, defaultValue: any) {
//     const [clicked, setClicked] = useState(
//        () => JSON.parse(localStorage.getItem(key)!) || defaultValue);
//       useEffect(() => {
//        localStorage.setItem(key, JSON.stringify(clicked));
//       }, [key, clicked]);
//   return [clicked, setClicked];
// }

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
    <Card className={clicked == false ? "hidden": "card"} style={{ width: "18rem" }}>
      <div
        className="starDiv"
        onClick={(event) => {
          event.preventDefault();
          const target = event.target as Element;
          target.classList.toggle("fas");
            
                let foundIndex = favoritesList.findIndex(event => event.id == id);
                favoritesList.splice(foundIndex, 1);
                setClicked(false);
                console.log(favoritesList);
             
        }}
      >
        <i className={"fa-star fa-2x far fas"}></i>
      </div>
      <Card.Img variant="top" src={heart} className="cardImage"/>
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
