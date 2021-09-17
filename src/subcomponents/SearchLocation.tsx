import { useHistory } from "react-router"

export default function SearchLocation () {
    const history = useHistory();

    function handleClick() {
        history.push("/results")
    }

    return (
        <div><button type="button" onClick={handleClick}>search</button></div>
    )
}