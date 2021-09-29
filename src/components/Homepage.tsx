import SearchLocation from "../subcomponents/SearchLocation";
import {useEffect, useState} from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";
import Results from "./Results";
import Header from "./Header";
import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom"


export default function Homepage () {
    const[events, setEvents] = useState<Event[]>([])
    
   
    return (
        <div className="homeSeacrhDiv">


            <h1 className="homeH1 merry">search
            <div className="and">&</div>
            <div className="go homeGo">go</div></h1>
            <div className="searchGoDiv">
            <p className="withP">find events with </p>
            <p className="merryP"> merry </p>
            <p className="goP">go.</p>
            </div>
            

            <SearchLocation />
           

        </div>
        
    )
}