import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from "../services/GetDetails";
import GetDetailsInterface from "../models/GetDetailsInterface";
import "../App.css";
import heart from "../images/Untitled 27.svg"

interface Params {
  id: any;
}

// {name, dates, locale, type, info}: Event
export default function EventDetails() {
  const [event, setEvent] = useState<GetDetailsInterface>();
  const [eventName, setEventName] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [info, setInfo] = useState("");
  const [access, setAccess] = useState("");
  const [healthcheck, setHealthCheck] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [genre, setGenre] = useState("");
  const [venue, setVenue] = useState("");
  const[image, setImage] = useState("");
  const { id } = useParams<Params>();

  useEffect(() => {
    getDetails(id).then((data) => {
      if (
        data &&
        data._embedded &&
        data._embedded.events &&
        data._embedded.events[0]
      ) {
        console.log(data._embedded.events[0]);

        if (data._embedded.events[0].name) {
          setEventName(data._embedded.events[0].name);
        } else {
          setEventName("Not listed.");
        }

      
        if (data._embedded.events[0].url) {
          setEventUrl(data._embedded.events[0].url);
        } else {
          setEventUrl("Not listed.");
        }

        if (data._embedded.events[0].dates.start.localDate) {
          setEventDate(data._embedded.events[0].dates.start.localDate);
        } else {
          setEventDate("Not listed.");
        }
        

        if (data._embedded.events[0].dates.start.localTime) {
          setEventTime(data._embedded.events[0].dates.start.localTime);
        } else {
          setEventTime("Not listed.");
        }



        if (data._embedded.events[0].images[0].url) {
          setImage(data._embedded.events[0].images[0].url)
        } else {
          setImage(heart);
        }
        
         if (
          data._embedded.events[0].ticketing?.healthCheck?.description) {
          setHealthCheck(
            data._embedded.events[0].ticketing?.healthCheck?.description
          );
        } else {
          setHealthCheck("None");
        }

        if (data._embedded.events[0]?.info) {
            setInfo(data._embedded.events[0]?.info);
        } else {
            setInfo("None");
        }

        if (data._embedded.events[0].accessibility?.info) {
            setAccess(data._embedded.events[0].accessibility?.info);
        } else {
            setAccess("None listed");
        }

        if (data._embedded.events[0].classifications[0].genre?.name) {
            setGenre(data._embedded.events[0].classifications[0].genre.name);
        } else {
            setGenre("None listed");
        }

        if (data._embedded.events[0]._embedded.venues[0].name) {
            setVenue(data._embedded.events[0]._embedded.venues[0].name);
        } else {
            setVenue("None listed");
        }

        if (
          data._embedded.events[0].ticketing?.healthCheck?.description
        ) {
          setHealthCheck(
            data._embedded.events[0].ticketing?.healthCheck?.description
          );
        } else {
          setHealthCheck("None");
        }
      }
    });
  }, [setEvent]);

  useEffect(() => {
    getDetails(id).then((data) => {
      console.log(data);
    });
  }, [setEvent]);


  function formatDate(){
    let date = eventDate;
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

    function formatTime(){
        let time = eventTime.split(":"); // convert to array
        // fetch
        var hours = Number(time[0]);
        var minutes = Number(time[1]);
      
        // calculate
        var timeValue;
        if (hours > 0 && hours <= 12) {
          timeValue= "" + hours;
        } else if (hours > 12) {
          timeValue= "" + (hours - 12);
        } else if (hours == 0) {
          timeValue= "12";
        }  
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        timeValue += (hours >= 12) ? " P.M." : " A.M.";

        return timeValue
        }


  return (
    <div className="eventDetailsDiv">
        <img alt="event image of performers" src={image} className="eventDetailsImg"/>
      <h2 className="EventName">
           <strong> {eventName} </strong>
      </h2>
      <h3 className="eventVenue"><strong>Venue:</strong> {venue}</h3>
      <span className="EventDate"><strong>Date:</strong> {formatDate()}</span>
      <span className="EventTime"><strong>Time:</strong> {formatTime()}</span>

      <details>
        <summary className="Summary"> More Info</summary>
        <p>
          <strong>Note:</strong> {info}
        </p>
        <p>
          <strong>Accessibility:</strong> {access}
        </p>
        <p>
          <strong>Healthcheck:</strong> {healthcheck}
        </p>
        <p>
          <strong>Genre: </strong>
          {genre}
        </p>
      </details>
      <button className="buyTicketsBtn">
        <a href={eventUrl} className="buyTickets">
          Buy Tickets
        </a>
      </button>
    </div>
  );
}
