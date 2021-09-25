import {
  useParams,
  NavLink,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();

  function clickHome() {
    history.push("/");
  }

  function clickSearch() {
    history.push("/search");
  }

  function clickFavorites() {
    history.push("/favorites");
  }

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
          <div className="logoDiv">
            <img className="logo" src="PPGlogo.png"></img>
          </div>

          <ul className="headerUl">
            <li className="headerLi" onClick={clickFavorites}>
              <NavLink to="/favorites">
                <i className="fas fa-star"></i>
                favorites
              </NavLink>
            </li>

            <li className="headerLi" onClick={clickSearch}>
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
