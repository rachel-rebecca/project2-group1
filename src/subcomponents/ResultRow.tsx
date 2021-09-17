import Event from "../models/Event";
import Results from "../components/Results";
import { Card, Button } from "react-bootstrap";
import {Dates} from "../models/Event"

export default function ResultRow({ name, url, dates }: Event) {
  return (
    // <div>
    //     <a href={url}>{name}</a>
    // </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
         {dates.start.localDate} 

         {/* {classifications.genre.id} */}
        </Card.Text>
        <Button variant="primary" href={url}>
          Buy Tickets
        </Button>
      </Card.Body>
    </Card>
  );
}
