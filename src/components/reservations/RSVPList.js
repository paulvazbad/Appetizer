import React from "react";
import { connect } from "react-redux";
import {
  setSelectedRSVP,
  selectServer,
  getRSVPS
} from "../../actions/index.js";
import Card from "../Card.js";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

let restaurant_id;
class RSVPList extends React.Component {
  state = {
    detailRSVP: null,
    server: null
  };
  componentWillMount() {
    (this.props.restaurant_id);
    this.props.getRSVPS(this.props.restaurant_id);
    restaurant_id = this.props.restaurant_id;
  }
  numberOfGuests(numberOfGuests) {
    if (numberOfGuests <= 9) return "filter_" + numberOfGuests;
    else {
      return "filter_9_plus";
    }
  }
  selectServer(server, id) {
    //Si le pican a un server borrarlo
    this.props.selectServer({ server, id });
    this.setState({ server: server });
  }
  renderDescription(rsvp) {
    if (this.props.selectedRSVP === rsvp.id) {
      //this.setState({detailRSVP:id})
      return (
        <Card
          content={rsvp}
          editServer={true}
          onClick={() => this.selectServer("Paul", rsvp.id)}
        />
      );
    }
  }
  rsvplist = () =>
    this.props.rsvps.length ? (
      this.props.rsvps.map(rsvp => {
        return (
          //Return a Card element
          <li key={rsvp.id}>
            <div
              className="collapsible-header flow-text"
              onClick={() => this.props.setSelected(rsvp.id)}
            >
              <i className="medium material-icons ">
                {this.numberOfGuests(rsvp.numberOfGuests)}
              </i>
              {rsvp.first_name} {rsvp.last_name}
              <span className="badge">
                {moment(rsvp.date + " " + rsvp.time).calendar()}
              </span>
            </div>
            {this.renderDescription(rsvp)}
          </li>
        );
      })
    ) : (
      <p className="center collection-item white"> NO RSVPS </p>
    );

  render() {
    return <ul className="collapsible white">{this.rsvplist()}</ul>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setSelected: id => {
      dispatch(setSelectedRSVP(id));
    },
    selectServer: name => {
      dispatch(selectServer(name));
    },
    getRSVPS: restaurant_id => {
      dispatch(getRSVPS(restaurant_id));
    }
    //fetch RSVPS with restaurant ID
  };
};
const mapStateToProps = (state, ownProps) => {
  if (state.firestore.data[ownProps.restaurant_id]) {
    return {
      rsvps: state.firestore.ordered[ownProps.restaurant_id],
      selectedRSVP: state.rsvp.selectedRSVP
    };
  } else {
    return {
      rsvps: state.rsvp.rsvps,
      selectedRSVP: state.rsvp.selectedRSVP,
      restaurant_id: state.auth.restaurant_id
    };
  }
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(RSVPList);
