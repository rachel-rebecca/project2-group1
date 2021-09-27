import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect, useMemo } from "react";
import getEvents, { getEvent, getByLocation } from "../services/GetEvents";
import Event from "../models/Event";
import Header from "./Header";
import { useParams } from "react-router";

interface RouteParams {
    keyword: string,
    latlong: string,
    startDateTime: string,
    endDateTime: string,

}

export default function Results() {
    const [events, setEvents] = useState<Event[]>([]);
    // const[postalCode, setPostalCode] = useState();
    // const[keyword, setKeyword] = useState();
    const { keyword, latlong, startDateTime, endDateTime} = useParams<RouteParams>();
    // if ((/\d{5}/).test(search)) {
    //     console.log("zipcode is: ", search.match(/\d{5}/)![0]);
    //     setPostalCode(search.match(/\d{5}/)![0])
    // }

    const[page, setPage] = useState(0);

    useEffect(() => {
        getByLocation(latlong, keyword, startDateTime, endDateTime, page).then((data) => {
            setEvents(data);
            setEvents(JSON.parse(localStorage.getItem("events")!));
            localStorage.setItem('events', JSON.stringify(data));
        })
    }, [setEvents, setPage]);

  
    return (
        <div className="resultsDiv">

            {events?.map((event, index) => {
                return <ResultRow
                    key={index} id={event.id} name={event.name}
                    url={event.url} dates={event.dates} classifications={event.classifications}
                    _embedded={event._embedded} locale={event.locale} info={event.info}
                    pleaseNote={event.pleaseNote} images={event.images}/>
            })}


            {/* Will load next 20 results when clicked */}
            {/* <button onClick={() => {
                const nextEvents = [...events]
                setPage(prev => prev + 1)}}>Load more results</button> */}




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
