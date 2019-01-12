import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { HOME_PATH, CLIENT_PATH, AUTCHECK_PATH } from "../constants/paths.js";
import { connect } from "react-redux";
import { compose } from "redux";
import { logOut } from "../actions/index.js";
//TODO Add Signed in state

class Navbar extends React.Component {
  state = {
    signedIn: false
  };
  logOut = () => {
    this.props.logOut();
    this.props.history.push("/");
  };
  signOutButton = () => {
    if (this.props.signedIn) {
      return (
        <ul className="right">
          <li>
            <a onClick={this.logOut}>Log Out</a>
          </li>
          <li>
            <button className="btn btn-floating lighten-1">NO</button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={CLIENT_PATH}>Clients</NavLink>
          </li>
          <li>
            <NavLink to={AUTCHECK_PATH}>Restaurants</NavLink>
          </li>
        </ul>
      );
    }
  };
  render() {
    return (
      <nav className="nav-wrapper red lighten-2 ">
        <div className="container">
          <NavLink to={HOME_PATH} className="brand-logo left">
            Appetizer
          </NavLink>
          {this.signOutButton()}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  signedIn: state.auth.restaurant_id
});
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(Navbar);
