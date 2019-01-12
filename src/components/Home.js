import React from "react";
import { NavLink } from "react-router-dom";
import { CLIENT_PATH, AUTCHECK_PATH } from "../constants/paths.js";
//TODO Add Signed in state

class Home extends React.Component {
  render() {
    return (
      <div className="section container">
        <div className="row">
          <NavLink
            to={CLIENT_PATH}
            className="btn red lighten-2 col s8  offset-s2 "
          >
            Clients
          </NavLink>
        </div>
        <div className="row ">
          <NavLink
            to={AUTCHECK_PATH}
            className="btn red lighten-2 col s8 offset-s2"
          >
            Restaurants
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
