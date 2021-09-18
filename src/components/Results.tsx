import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect } from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router";

interface RouteParams {
    postalCode: any;
}



export default function Results() {
    const [events, setEvents] = useState<Event[]>([]);
    const{postalCode} = useParams<RouteParams>();
    
    if (postalCode) {
        let events2 = [...events];
        events2 = events2.filter((event) => event._embedded === postalCode)
        setEvents(events2)
    }
   
   
    useEffect(() => {
        getEvents().then((events) => { setEvents(events) })  
    }, [events]);

    // useEffect(() => {
    //     getByLocation(postalCode).then((events) => { setEvents(events) })  
    // }, [setEvents]);


    return (
        <div className="resultsDiv">

            {events?.map((event, index) => {
                return <ResultRow key={index} id={event.id} name={event.name} url={event.url} dates={event.dates} classifications={event.classifications} _embedded={event._embedded}/>
            })}

            {/* Will load next 20 results when clicked */}
            {/* <button >Load more results</button> */}

           


        </div>
    )
}

