import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getEvent} from "../services/GetEvents";
import Event from "../models/Event";


interface RouteParams {
    id: string;
   
}

export default function EventDetails () {
    const {id} = useParams<RouteParams>();
    const[Id, setId] = useState();
   
    const[event, setEvent] = useState<Event>()

    useEffect(() => {
        getEvent(id).then((data) => { setEvent(data) })  
    }, [setEvent]);

    return (
        <div className="container">
            <h1>Event Details</h1>
            
            {id}
           
           
        </div>
    )
}