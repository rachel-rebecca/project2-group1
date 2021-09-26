import Event from "../models/Event";
import Results from "../components/Results";
import { Card } from "react-bootstrap";
import { Dates } from "../models/Event";
import { useState, useEffect, useContext, Fragment } from "react";
import { useHistory } from "react-router";
import { getEvent } from "../services/GetEvents";
import EventDetails from "../components/EventDetails";
import { Favorites } from "../context/FavoritesProvider";
import { FaveEvent } from "../context/FavoritesProvider";

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
    // setting up the useHistory function which navigates user to single event details page.
  const history = useHistory();
  // importing children from the FavoritesProvider file
  const { addToFaves, remove, favoritesList } = useContext(Favorites);
  const[saveEvent, setSaveEvent] =  useState<FaveEvent>({name: name, url: url, date: dates?.start.localDate, id: id});
  // state for ID to be in when use removes event from favoriteslist.
  const[ID, setID] = useState<any>();
 // function that routes use to details page using id value.
  function handleClick() {
    history.push(`/details/${id}`);
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
        onClick={(event) =>{
            event.preventDefault();
            const target = event.target as Element;
            target.classList.toggle("fas");
            if(favoritesList.length <= 1){
                favoritesList.push(saveEvent)
            }
            // checking if classlist "fas" is true, which means the start icon is filled in.
            if (target.classList.contains("fas")) {
                // setSaveEvent({name: name, url: url, date: dates?.start.localDate, id: id});
                addToFaves(saveEvent);
                // log to check saveEvent and favoritesList
                 console.log(saveEvent)
                 console.log(favoritesList);
            } else {
                // setID(id);
                remove(id);
                console.log(favoritesList)
            } 
        }}
      >
        <i className={"fa-star fa-2x far"}></i>
      </div>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="cardBody">
        < Card.Title onClick={handleClick} className="cardTitle">
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
