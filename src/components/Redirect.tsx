import errorPic from "../images/errorPic.svg"
import {useHistory} from "react-router-dom";


export default function Redirect () {

    const history = useHistory();

    function handleClick() {
        history.push("/")
    }


    return (
        <div className="redirectDiv">
            <img alt="broken merry-go-round text says something got away from us" src={errorPic} className="errorImg"/>
            <p>Please fill out every search criteria.</p>
            <button onClick={handleClick} className="homeBtn">Home</button>
        </div>
    )

}