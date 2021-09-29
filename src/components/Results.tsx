import ResultRow from "../subcomponents/ResultRow";
import { useState, useEffect, useMemo } from "react";
import { getByLocation } from "../services/GetEvents";
import Event from "../models/Event";
import { useParams } from "react-router";


interface RouteParams {
  keyword: string;
  latlong: string;
  startDateTime: string;
  endDateTime: string;
}

export default function Results() {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(0);
  const { keyword, latlong, startDateTime, endDateTime } =
    useParams<RouteParams>();
  const [loading, setLoading] = useState(false);
  // if ((/\d{5}/).test(search)) {
  //     console.log("zipcode is: ", search.match(/\d{5}/)![0]);
  //     setPostalCode(search.match(/\d{5}/)![0])
  // }

  useEffect(() => {
    function loadEvents() {
      setLoading(true);
      getByLocation(latlong, keyword, startDateTime, endDateTime, page).then(
        (data) => {
          setEvents([...events, ...data]);
          setLoading(false);
          // setEvents(JSON.parse(localStorage.getItem("events")!))
          // localStorage.setItem('events', JSON.stringify(data))
        }
      );
    }
    loadEvents();
  }, [page]);

  return (

      <div className="resultsDiv">
        {events?.map((event, index) => {
          return (
            <ResultRow
              key={index}
              id={event.id}
              name={event.name}
              url={event.url}
              dates={event.dates}
              classifications={event.classifications}
              _embedded={event._embedded}
              locale={event.locale}
              info={event.info}
              pleaseNote={event.pleaseNote}
              images={event.images}
            />
          );
        })}

        <div className="loadMoreDiv">
             {/* Will load next 20 results when clicked */}
        <button className="loadMoreBtn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more results
        </button>
        </div>
       
      </div>
  );
}

