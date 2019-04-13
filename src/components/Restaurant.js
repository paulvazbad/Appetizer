import React from "react";
import { connect } from "react-redux";
import RSVPList from "./reservations/RSVPList";

class Restaurant extends React.Component {
  componentDidMount() {
    if (!this.props.restaurant_id) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 offset -m1">
            <RSVPList restaurant_id={this.props.restaurant_id} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    restaurant_id: state.auth.restaurant_id
  };
};
export default connect(mapStateToProps)(Restaurant);
