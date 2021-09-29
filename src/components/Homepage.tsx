import SearchLocation from "../subcomponents/SearchLocation";
import { useState} from "react";
import Event from "../models/Event";



export default function Homepage () {
    const[events, setEvents] = useState<Event[]>([])
    
   
    return (
        <div className="homeSeacrhDiv">


            <h1 className="homeH1 merry">search
            <div className="and">&</div>
            <div className="go homeGo">go</div></h1>
            <div className="searchGoDiv">
            <p className="findEventsP">find events</p>
            <p className="withP"> with </p>
            <p className="merryP"> merry </p>
            <p className="goP">go.</p>
            </div>
            

            <SearchLocation />
           

        </div>
        
    )
}