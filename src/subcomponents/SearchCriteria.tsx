import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useHistory } from "react-router";


export default function SearchCriteria () {
    const history = useHistory();

    function handleClick() {
        history.push("/results")
    }

    return (
        <div>
            <form>
                <label> Date
                    <input type="date" />
                </label>

                <label>
                    <input />
                </label>

                <button type="submit" onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}