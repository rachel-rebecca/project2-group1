import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect } from "react";
import getEvents, { getEvent } from "../services/GetEvents";
import Event from "../models/Event";
import Header from "./Header";
import { useParams } from "react-router";

interface RouteParams {
    keyword: string;
}

export default function Results() {
    const [events, setEvents] = useState<Event[]>([]);
    const { keyword } = useParams<RouteParams>();

    const [criteria, setCriteria] = useState<string>();




    useEffect(() => {
        getEvents(keyword).then((data) => { setEvents(data) })
    }, [setEvents]);

    function searchCriteria(criteria: any) {

        let criteriaArray = [...events];

        return (
            criteriaArray.filter(findEvent => findEvent == criteria)
        )
    }

    return (
        <div className="resultsDiv">

            {/* <input className="criteria" type="text" placeholder="keyword" onChange={(event) => { setCriteria(event.target.value) }} /> */}
            {/* <button className="criteria" type="submit" onSubmit={searchCriteria(criteria)} >search</button> */}

            {events?.map((event, index) => {
                return <ResultRow
                    key={index} id={event.id} name={event.name}
                    url={event.url} dates={event.dates} classifications={event.classifications}
                    _embedded={event._embedded} locale={event.locale} info={event.info}
                    pleaseNote={event.pleaseNote} />
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
