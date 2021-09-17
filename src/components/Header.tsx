import {useParams, NavLink, Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useHistory } from "react-router";

export default function Header() {
  return (
    
    <header>

    <Router>
        <nav>
     <NavLink to="/" exact> <h1 className="headerH1">merrygo</h1> </NavLink>

      <ul className="headerUl">
        <li className="headerLi">
          <NavLink to="/favorites">
            <i className="fas fa-star"></i>
            favorites
          </NavLink>
        </li>

        <li className="headerLi">
          <NavLink to="/search">
            <i className="fas fa-search"></i>
            search
          </NavLink>
        </li>
      </ul>
      </nav>
    </Router>
    </header>
  );
}
