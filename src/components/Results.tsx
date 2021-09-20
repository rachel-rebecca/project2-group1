import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect } from "react";
import getEvents, { getEvent } from "../services/GetEvents";
import Event from "../models/Event";
import Header from "./Header";
import { useParams } from "react-router";

interface RouteParams {
    postalCode: any;
}

export default function Results() {
    const [events, setEvents] = useState<Event[]>([]);
    const{postalCode} = useParams<RouteParams>();
   
    
   

    useEffect(() => {
        getEvents(postalCode).then((data) => { setEvents(data) })  
    }, [setEvents]);
 

    return (
        <div className="resultsDiv">

            {events?.map((event, index) => {
                return <ResultRow 
                key={index} id={event.id} name={event.name} 
                url={event.url} dates={event.dates} classifications={event.classifications} 
                _embedded={event._embedded} locale={event.locale} info={event.info}
                pleaseNote={event.pleaseNote}/>
            })}

            {/* Will load next 20 results when clicked */}
            {/* <button >Load more results</button> */}

           


        </div>
    )
}


// useEffect(() => {
    //     // if (postalCode) {
    //     //     // events2 = events2.filter((event) => event._embedded == postalCode)
    //     //     // setEvents(events2)
    //     //     console.log(events2)   
    //     // }
    //     getEvents().then((data) => { setEvents(data) })  
    // }, []);

    // let events2 = [...events];


    // useEffect(() => {
    //     getByLocation(postalCode).then((events) => { setEvents(events) })  
    // }, [setEvents]);
