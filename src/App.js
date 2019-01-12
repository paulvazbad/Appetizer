import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  HOME_PATH,
  RESTAURANT_PATH,
  LOGIN_PATH,
  AUTCHECK_PATH,
  CLIENT_PATH,
  ADDRSVP_PATH,
  VIEWRSVP_PATH,
  SEARCH_REST
} from "./constants/paths.js";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import Login from "./components/auth/Login";
import AuthCheck from "./components/AuthCheck";
import Clients from "./components/Clients";
import CreateRSVP from "./components/reservations/CreateRSVP";
import RSVPdetails from "./components/reservations/RSVPdetails";
import SearchRes from "./components/SearchRes.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path={HOME_PATH} component={Home} />
            <Route exact path={LOGIN_PATH} component={Login} />
            <Route
              exact
              path={RESTAURANT_PATH + "/:restaurant_id"}
              component={Restaurant}
            />
            <Route exact path={AUTCHECK_PATH} component={AuthCheck} />
            <Route exact path={CLIENT_PATH} component={Clients} />
            <Route
              exact
              path={ADDRSVP_PATH + ":restaurant_id"}
              component={CreateRSVP}
            />
            <Route exact path={VIEWRSVP_PATH} component={RSVPdetails} />
            <Route exact path={SEARCH_REST} component={SearchRes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
