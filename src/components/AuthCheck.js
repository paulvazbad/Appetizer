import React from "react";
import { RESTAURANT_PATH } from "../constants/paths.js";
import { connect } from "react-redux";

class AuthCheck extends React.Component {
  componentDidMount() {
    ("AuthCHeck");
  }
  render() {
    const restaurant_id = this.props.restaurant_id;
    if (restaurant_id) {
      this.props.history.push(RESTAURANT_PATH + "/" + this.props.restaurant_id);
      return <p>Redirecting</p>;
    } else {
      this.props.history.push("/login");
      return <p>Redirecting</p>;
    }
  }
}
const mapStateToProps = state => ({ restaurant_id: state.auth.restaurant_id });
export default connect(mapStateToProps)(AuthCheck);
