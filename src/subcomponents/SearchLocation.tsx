import { useHistory } from "react-router";
import { useState, useContext } from "react";
import { LongLat } from "../models/LongLat";
import {  Favorites} from "../context/FavoritesProvider";



export default function SearchLocation() {
  const { searchCriteria } = useContext(Favorites);
  const [keyword, setKeyword] = useState<any>();
  const [latlong, setLatlong] = useState<any>();
  const [startDateTime, setStartDateTime] = useState<any>();
  const [endDateTime, setEndDateTime] = useState<any>();
  const history = useHistory();

  function handleClick() {
    if(latlong == undefined || startDateTime == undefined || endDateTime == undefined) {
        history.push("/error")
    } else {
        history.push(`/results/${keyword}/${latlong}/${startDateTime}/${endDateTime}`);
    } 
  }



  return (
    <form className="search" 
    onSubmit={(e) => {e.preventDefault();
    searchCriteria.unshift({keyword: keyword, latlong: latlong, startDateTime: startDateTime, endDateTime: endDateTime});
    }}>
    {/* Label and input for keyword */}
    <span className="keywordZipSpan">
      <label htmlFor="keyword" className="keywordInput">
        Enter a keyword:
        <input 
        role="textbox"
        aria-label="keywordInput"
        placeholder="event, artist, etc."
          // setPostalCode(e.target.valueAsNumber);
          onChange={(e) => {
              setKeyword(e.target.value)
            // setKeyword(e.target.value.match(/^\w+/)![0])
            // // if there is a 5 digit number....log it
            // if ((/\d{5}/).test(e.target.value)) {
            //   console.log("zipcode is: ", e.target.value.match(/\d{5}/)![0]);
            //     setPostalCode(e.target.value.match(/\d{5}/)![0]);   
            //     console.log("keyword:", keyword)
            // }
          }}
          type="text"
          required />
      </label>
    {/* Label and input for zipcode which is converted to latitude and longitude  */}
        <label htmlFor="zipcode" className="zipCodeInput">
          Enter zipcode:
          <input 
          role="textbox" 
          aria-label="postalCodeInput" 
          placeholder="event zipcode"
          min="00601" max={83802} onChange={(e) => {
                if(e.target.value.length == 5) {
                    LongLat.forEach(array => {
                        if(array[0] == e.target.value) {
                            setLatlong(""+array[1]+","+array[2]+"")
                            console.log(latlong)
                        }
                    })
                }
                }} required/>
        </label>
    </span>

    <span className="startEndDateSpan">
    {/* Label and input for date which are formatted to ticketmaster's liking*/}
        <label className="startDateInput">
             Select start date:
            <input 
            role="dateInput"
            aria-label="startDate"
            // value="09/29/2021"
            // placeholder="09/29/2021"
            type="date" onChange={(e) => {
                console.log(e.target.value)
                const dateTime = e.target.value + "T00:00:00Z"
              setStartDateTime(dateTime);
            }}
            required />
        </label>
        <label className="endDateInput">
             Select end date:
            <input 
            role="dateInput"
            aria-label="endDate"
            type="date" onChange={(e) => {
                const dateTime = e.target.value + "T00:00:00Z"
              setEndDateTime(dateTime);
            }}
            required />
        </label>
    </span>

    <button 
    role="button"
    aria-label="onSubmit"
    type="submit" onClick={handleClick} className="searchBtn">
        search
      </button>
    </form>

  );
}
