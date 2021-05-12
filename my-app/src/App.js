import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmList from "./components/FilmList";
import Favourites from "./components/Favourites"

function App() {
  return (
    <div>
      <Router>
        <NavBar /> 
        <Switch>
          <Route path="/FilmList" exact component={() => <FilmList />} />
          <Route path="/Favourites" exact component={() => <Favourites />} />
        </Switch>
      </Router>
    </div>  
  );
}

export default App;