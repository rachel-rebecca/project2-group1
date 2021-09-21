import { useHistory } from "react-router";
// import {getByLocation} from "../services/GetEvents"
import { useEffect, useState } from "react";
import Event from "../models/Event";
import getEvents from "../services/GetEvents";


export default function SearchLocation({ onSubmit }: { onSubmit: (postalCode: any) => void }) {
    const [events, setEvents] = useState<Event[]>();
    const [postalCode, setPostalCode] = useState<number>();
    const history = useHistory();

    function handleClick() {
        history.push(`/results/${postalCode}`)
    }

    // useEffect(() => {
    //     getEvents(postalCode).then((events) => { setEvents(events) })  
    // }, []);
    // onSubmit={onSubmit}

    return (
        <div className="searchDiv">
            <label htmlFor="postalCode" className="zipCodeInput">
                Enter your zip code:
                <input onChange={(e) => { setPostalCode(e.target.valueAsNumber) }} type="number" min={1} max={99999} />
            </label>
            <button type="submit" onClick={handleClick} className="searchBtn">search</button>
        </div>
    )
}