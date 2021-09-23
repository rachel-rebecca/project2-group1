import { useHistory } from "react-router";
// import {getByLocation} from "../services/GetEvents"
import { useEffect, useState } from "react";
import Event from "../models/Event";
import getEvents from "../services/GetEvents";

export default function SearchLocation({
  onSubmit,
}: {
  onSubmit: (postalCode: any) => void;
}) {
  const [events, setEvents] = useState<Event[]>();
  // const [postalCode, setPostalCode] = useState<number>();
  const [keyword, setKeyword] = useState<any>();
  const history = useHistory();

  function handleClick() {
    history.push(`/results/${keyword}`);
  }

  // useEffect(() => {
  //     getEvents(postalCode).then((events) => { setEvents(events) })
  // }, []);
  // onSubmit={onSubmit}

  return (
    <div className="search">



      <label htmlFor="keyword" className="zipCodeInput">
        {/* Enter your zip code: */}
        Enter a Keyword:
        <input
          // setPostalCode(e.target.valueAsNumber);

          onChange={(e) => {
            setKeyword(e.target.value);
            // if there is a 5 digit number....log it
            if ((/\d{5}/).test(e.target.value)) {
              console.log("zipcode is: ", e.target.value.match(/\d{5}/)![0]);

            }


          }}



          type="text"
        // min={1}
        // max={99999}
        />
      </label>
      <button type="submit" onClick={handleClick} className="searchBtn">
        search
      </button>
    </div>
  );
}
