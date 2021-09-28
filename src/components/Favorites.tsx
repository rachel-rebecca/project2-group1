import FavoriteRow from "../subcomponents/FavoriteRow";
import { Favorites } from "../context/FavoritesProvider";
import { useContext, useState, useEffect } from "react";

export default function FavoritesPage () {

    const{favoritesList, addToFaves, remove} = useContext(Favorites);
    const[events, setEvents] = useState(favoritesList);

//       useEffect(() => {
//     setEvents(JSON.parse(localStorage.getItem("events")!));
//     // localStorage.setItem('clicked', String(clicked));
//     localStorage.setItem('events', JSON.stringify(favoritesList));
//    }, [events]);

//      useEffect(() => {
//     localStorage.setItem('events', JSON.stringify(favoritesList));
//   }, [events])

    // function usePersistedState(key: any, defaultValue: any) {
    //     const [state, setState] = useState(
    //        () => JSON.parse(localStorage.getItem(key)!) || defaultValue);
    //       useEffect(() => {
    //        localStorage.setItem(key, JSON.stringify(state));
    //       }, [key, state]);
    //   return [state, setState];
    // }

    return (
        <div>
                <div className="resultsDiv">
            
                    {favoritesList.map((event, index) => {
                     return <FavoriteRow key={index} name={event.name} url={event.url} id={event.id} date={event.date}/>
                    })}
            
                 </div>
        </div>
        // <h1 className="favoritesH1"> Favorites </h1>
        // <div className="resultsDiv">
            
        //     {favoritesList.map((event, index) => {
        //        return <FavoriteRow key={index} name={event.name} url={event.url} id={event.id} date={event.date}/>
        //     })}
            
        // </div>
    )
}