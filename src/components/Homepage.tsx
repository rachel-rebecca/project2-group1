import SearchLocation from "../subcomponents/SearchLocation";
import {useEffect, useState} from "react";
import getEvents from "../services/GetEvents";
import Event from "../models/Event";
import Results from "./Results";


export default function Homepage () {
    

    return (
        <div >
            <h1> Home </h1>
            <SearchLocation />
            <Results />
        </div>
        
    )
}