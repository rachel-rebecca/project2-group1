import Event from "../models/Event";
import Results from "../components/Results";
import { Card, Button } from "react-bootstrap";
import {Dates} from "../models/Event";
import {useState} from "react";
import { useHistory } from "react-router";

export default function ResultRow({ name, url, dates, classifications }: Event) {
    const history = useHistory();

    function handleClick() {
        history.push("/details")
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
          
         {dates.start.localDate} 
        
         
        
        </Card.Text>
        <Button variant="primary" href={url}>
          Buy Tickets
        </Button>
      </Card.Body>
    </Card>
  );
}
