import Event from "../models/Event";
import Results from "../components/Results";
import { Card, Button } from "react-bootstrap";

export default function ResultRow ({name, url} : Event) {


    return (
        // <div>
        //     <a href={url}>{name}</a>
        // </div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href={url}>Buy Tickets</Button>
  </Card.Body>
</Card>
    )
}