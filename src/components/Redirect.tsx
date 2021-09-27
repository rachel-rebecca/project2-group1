import errorPic from "../images/errorPic.svg"
import {useHistory} from "react-router-dom";


export default function Redirect () {

    const history = useHistory();

    function handleClick() {
        history.push("/")
    }


    return (
        <div>
            <img alt="broken merry-go-round text says something got away from us" src={errorPic}/>
            <button onClick={handleClick}>Return Home</button>
        </div>
    )

}