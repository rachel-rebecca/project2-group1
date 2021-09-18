import Event from "../models/Event";
import Results from "../components/Results";
import { Card, Button } from "react-bootstrap";
import {Dates} from "../models/Event";
import {useState, useEffect} from "react";
import { useHistory } from "react-router";
import {getEvent} from "../services/GetEvents";

export default function ResultRow({ id, name, url, dates, classifications, _embedded }: Event) {
    const history = useHistory();
    const[Id, setId] = useState<string>();
    const[event, setEvent] = useState<Event>()


    function handleClick() {
        const Id = id
        setId(Id)
        setEvent({name: name, url: url})
        history.push(`/details/${id}${name}`)
    }
  
    return (
    
    <Card className="card" style={{ width: "18rem" }}>
        <div className="starDiv">
        <i className="far fa-star"></i>
        </div>
      <Card.Img variant="top" src="holder.js/100px180" />  
      <Card.Body>
        <Card.Title onClick={handleClick} className="cardTitle">{name}</Card.Title>
        <Card.Text>
          {_embedded?.venues.postalCode}
         {dates?.start.localDate} 
        
         
        
        </Card.Text>
        <Button variant="primary" href={url}>
          Buy Tickets
        </Button>
      </Card.Body>
    </Card>
  );
}
