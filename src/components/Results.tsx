import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect } from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";
import Page from "../models/Page";




export default function Results() {
    const [events, setEvents] = useState<Event[]>();
   
   
    useEffect(() => {
        getEvents().then((events) => { setEvents(events) })  
    }, []);


    return (
        <div className="resultsDiv">

            {events?.map((event, index) => {
                return <ResultRow key={index} name={event.name} url={event.url} dates={event.dates} classifications={event.classifications}/>
            })}

            {/* Will load next 20 results when clicked */}
            {/* <button >Load more results</button> */}

           


        </div>
    )
}

