import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useParams, NavLink, BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"
import Favorites from './components/Favorites';
import Results from './components/Results';
import EventDetails from './components/EventDetails';
import Event from './models/Event';
import { useState, useEffect } from "react";
import getEvents from './services/GetEvents';
import FavoritesProvider from './context/FavoritesProvider';
import Redirect from './components/Redirect';


function App() {

  const [event, setEvent] = useState<Event>();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvents().then((data) => { setEvents(data) })
  }, [setEvents]);

  // function onSubmit (postalCode: any) {
  //     let events2 = [...events];
  //     events2 = events2.filter((event) => event._embedded === postalCode);
  //     setEvents(events2);
  // }

  function onSubmit(name?: string, dates?: any) {
    getEvents(name, dates).then((data) =>
      setEvents(data))
  }


  return (
    <BrowserRouter>
    <FavoritesProvider>
    <div className="App">
      <Router>
        {/* contains our NavLinks */}
        <Header />

        <Switch>
          {/* Route to Event Details */}
          <Route path='/details/:id' exact>
            <EventDetails />
          </Route>
          {/* Route to Favorites page */}
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
          {/* Route to Results with postalCode */}
          <Route path="/results/:keyword/:latlong/:startDateTime/:endDateTime" exact>
            <Results/>
          </Route>
          {/* Route to Results */}
          <Route path="/results" exact>
            <Results />
          </Route> 
    
          {/* Route to Error page */}
          <Route path="/error" exact>
            <Redirect />
          </Route>
          {/* Route to Homepage */}
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
    </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
