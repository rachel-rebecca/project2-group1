import { NavLink, BrowserRouter as Router} from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router";
import logo from "../images/PPGlogo.png";
import { SearchCriteria, Favorites } from "../context/FavoritesProvider";

export default function Header({keyword, latlong, startDateTime, endDateTime}: SearchCriteria) {
  const history = useHistory();
  const { searchCriteria} = useContext(Favorites);


  function clickHome() {
    history.push("/");
  }

  function clickSearch() {
    history.push("/");
  }

  function clickFavorites() {
    history.push("/favorites");
  }

  // attempted to have "search" route user back to previous results 
    // keyword = searchCriteria[0].keyword;
    // latlong= searchCriteria[0].latlong;
    // startDateTime = searchCriteria[0].startDateTime;
    // endDateTime = searchCriteria[0].endDateTime;
    // console.log(searchCriteria)
    // let searchResults = `/results/${keyword}/${latlong}/${startDateTime}/${endDateTime}`


  return (
    <header>
      <Router>
        <nav>
          <NavLink to="/" exact>
            {" "}
            <h1 className="headerH1 merry" onClick={clickHome}>
              merry<div className="go">go</div>
            </h1>{" "}
          </NavLink>
          <div className="logoDiv" onClick={clickHome}>
            <img className="logo" src={logo}></img>
          </div>

          <ul className="headerUl">
            <li className="headerLi" onClick={clickFavorites}>
              <NavLink to="/favorites">
                <i className="fas fa-star nav-star"></i>
                favorites
              </NavLink>
            </li>

            <li className="headerLi" onClick={clickSearch}>
              <NavLink to="/">
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
