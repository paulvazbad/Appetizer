import React from "react";
import { NavLink } from "react-router-dom";
import {
  ADDRSVP_PATH,
  VIEWRSVP_PATH,
  SEARCH_REST
} from "../constants/paths.js";

class Clients extends React.Component {
  render() {
    return (
      <div className="section container center">
        <div class="row">
          <NavLink
            to={ADDRSVP_PATH + "LueyDzK7bGQLokFIyfyeH2hRJyg1"}
            className="btn red lighten-2 col s8  offset-s2 "
          >
            NEW RSVP
          </NavLink>
        </div>
        <div className="row">
          <NavLink
            to={VIEWRSVP_PATH}
            className="btn red lighten-2 col s8  offset-s2 "
          >
            VIEW MY RSVPS
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Clients;
