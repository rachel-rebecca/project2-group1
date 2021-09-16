import SearchLocation from "../subcomponents/SearchLocation";
import {useEffect, useState} from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";


export default function Homepage () {
    const[events, setEvents] = useState<Event[]>();

    useEffect(() => {
        getEvents().then((events) => {setEvents(events)})
    }, [])

    return (
        <div >
            <h1> Home </h1>
            <SearchLocation />
            {events?.map((event, index) => {
                return <p key={index}>{event.name}</p>
            })}
        </div>
        
    )
}