import SearchLocation from "../subcomponents/SearchLocation";
import {useEffect, useState} from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";
import Results from "./Results";
import Header from "./Header";
import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom"


export default function Homepage () {
    const[events, setEvents] = useState<Event[]>([])
    
    function onSubmit (postalCode: any) {
        let events2 = [...events];
        events2 = events2.filter((event) => event._embedded === postalCode);
        setEvents(events2);
    }

    // function onSubmit(name?: string, dates?: any) {
    //     getEvents(name, dates).then((data) => 
    //       setEvents(data))
    //   }

    return (
        <div className="container">


            <h1 className="homeH1"> Home </h1>

            <SearchLocation onSubmit={onSubmit}/>
            {/* onSubmit={onSubmit} */}

        </div>
        
    )
}