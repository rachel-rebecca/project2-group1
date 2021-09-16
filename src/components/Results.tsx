import ResultRow from "../subcomponents/ResultRow";
import {useState, useEffect} from "react"; 
import getEvents from "../services/GetEvents";
import SearchLocation from "../subcomponents/SearchLocation";
import Event from "../models/Event";

export default function Results () {
    const[events, setEvents] = useState<Event[]>();

    useEffect(() => {
        getEvents().then((events) => {setEvents(events)})
    }, [])

    function LoadMore (events: Event[]) {
        let moreEvents = [...events];
        // find some way to copy original array and push next 20 results to it
    }

    return (
        <div> 
            <h1> Results </h1>
           
            {events?.map((event, index) => {
                return <ResultRow key={index} name={event.name} url={event.url}/>
            })}
           
           {/* Will load next 20 results when clicked */}
           <button >Load more results</button>
            
            
        </div>
    )
}