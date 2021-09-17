import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Favorites from './components/Favorites';
import SearchCriteria from './subcomponents/SearchCriteria';
import SearchLocation from './subcomponents/SearchLocation';
import Results from './components/Results';
import InfiniteScroll from "react-infinite-scroll-component"
import EventDetails from './components/EventDetails';

function App() {
  
  return (
    <div className="App">
     <Router> 
      {/* contains our NavLinks */}
     <Header />
      
      <Switch>
        {/* Route to Favorites page */}
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        {/* Route to Results */}
        <Route path="/results" exact>
          <Results />
        </Route>
        {/* Route to Event Details */}
        <Route path="/details" exact>
          <EventDetails />
        </Route>
        {/* Route to SearchCriteria */}
        <Route path="/search" exact>
          <SearchCriteria />
        </Route>
        {/* Route to Homepage */}
        <Route path="/" exact>
          <Homepage/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
