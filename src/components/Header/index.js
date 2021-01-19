import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.css";

import MarvelLogo from "../../assets/marvel-logo.png";

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <div>
        <Link to="/">
          <img
            src={MarvelLogo}
            alt="Marvel API Challenge"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Characters</li>
          </Link>
          <li
            onClick={() => {
              history.push("/favorites");
            }}
          >
            My Favorites
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
