import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getEvent} from "../services/GetEvents";


interface RouteParams {
    name: any;
    url: string;
    id: string;
}

export default function EventDetails () {
    const {name} = useParams<RouteParams>();
    const {url} = useParams<RouteParams>();
    const {id} = useParams<RouteParams>();
    const[event, setEvent] = useState<RouteParams>()

    useEffect(() => {
        getEvent(id).then((event) => { setEvent(event) })  
    }, []);

    return (
        <div className="container">
            <h1>Event Details</h1>
            {/* <p>{name}</p>
            {url} */}
        </div>
    )
}