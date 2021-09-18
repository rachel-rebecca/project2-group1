import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getEvent} from "../services/GetEvents";
import Event from "../models/Event";


interface RouteParams {
    name: any;
    url: string;
    id: string;
   
}

export default function EventDetails () {
    const {name} = useParams<RouteParams>();
    const {url} = useParams<RouteParams>();
    const {id} = useParams<RouteParams>();
    const[Id, setId] = useState();
   
    const[event, setEvent] = useState<Event>()

    useEffect(() => {
       
        getEvent(id).then((event) => { setEvent(event) })  
    }, [setId]);

    return (
        <div className="container">
            <h1>Event Details</h1>
             <p>
            {name}
            {url}
            {id}
            {event?.name}
            </p>
        </div>
    )
}