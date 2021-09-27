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
import sports from "../images/sports-500x500.png"
import testImg from "../images/Untitled 28.png"
import { convertCompilerOptionsFromJson } from "typescript";

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
  images

}: Event) {
    // setting up the useHistory function which navigates user to single event details page.
  const history = useHistory();
  // importing children from the FavoritesProvider file 
  const { addToFaves, remove, favoritesList} = useContext(Favorites);
  const [image, setImage] = useState(images[0].url)
  // making a state for one event to be added to favorites list
  const[saveEvent, setSaveEvent] =  useState<FaveEvent>({name: name, url: url, date: dates?.start.localDate, id: id});
  // boolean value for if star was clicked or not (favorited or not).
  const[clicked, setClicked] = useState("false")
 // function that routes use to details page using id value.
    
    
  function handleClick() {
    history.push(`/details/${id}`);
  }

//   useEffect(() => {
//     setClicked(JSON.parse(localStorage.getItem("clicked")!));
//     // localStorage.setItem('clicked', JSON.stringify(clicked));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('clicked', JSON.stringify(clicked));
//   }, [clicked]);

  
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


    function cutOffTitle() {
        let title = name
        let titleArray = title?.split("")
        if (titleArray) {
            if (titleArray.length >= 35) {
                titleArray = titleArray.slice(0, 35);
                let titleString = titleArray.join("");
                return titleString + "...";
            } else {
                return title;
            }
        } 
    }



  return (    
    <Card className="card" style={{ width: "18rem" }}>
         <div
        className="starDiv"
        onClick={(event) =>{
            event.preventDefault();
            const target = event.target as Element;
            // target.classList.toggle("fas");
          
            if(clicked == "false"){
                favoritesList.push(saveEvent);
                console.log(favoritesList);
                target.classList.add("fas");
                 // setting clicked to true after first click.
                setClicked("true");
            } else if (clicked == "true") {
                let foundIndex = favoritesList.findIndex(event => event.id == id);
                favoritesList.splice(foundIndex, 1);
                target.classList.remove("fas");
                setClicked("false");
                console.log(favoritesList)
            }
        }}
      > 
       {/* fa-2x  {name}*/}
        <i className={"fa-star far"}></i>
      </div>
      <Card.Img variant="top" src={image} className="cardImage" />
      <Card.Body className="cardBody">
        < Card.Title onClick={handleClick} className="cardTitle">
              <p>{cutOffTitle()}</p>
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
