import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";


export default function SearchCriteria ({onSubmit}: {onSubmit: (name?: any, dates?: any) => void}) {
    const[name, setName] = useState("")
    const[date, setDate] = useState("")
    const[events, setEvents] = useState<Event[]>()
    const history = useHistory();

    function handleClick() {
        history.push("/results")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label> Date
                    <input type="date" onChange={(e) => {setDate(e.target.value)}}/>
                </label>

                <label>
                    <input type="text" placeholder="keyword" onChange={(e) => {setName(e.target.value)}} />
                </label>

                <button type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}