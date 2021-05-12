import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
//import App from '../App';
import MovieListHeading from './MovieListHeading';


const NavBar = (prop) => {
  return (
    <div>
      < MovieListHeading heading='Movies' />

      <Nav pills> 
        <NavItem>
          <Link to="/FilmList">All Films</Link>
        </NavItem>
      </Nav>

      <Nav pills> 
        <NavItem>
          <Link to="/Favourites">Favorites</Link>
        </NavItem>
      </Nav>     
    </div>
  );
}

export default NavBar;