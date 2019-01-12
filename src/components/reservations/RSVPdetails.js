import React from "react";
import { connect } from "react-redux";
import Card from "../Card.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class RSVPdetails extends React.Component {
  state = {
    rsvp: null,
    id: null
  };
  numberOfGuests(numberOfGuests) {
    if (numberOfGuests <= 9) return "filter_" + numberOfGuests;
    else {
      return "filter_9_plus";
    }
  }
  findReservation() {
    const rsvps = this.props.rsvps;
    let rsvp = rsvps.find(ele => {
      return ele.id === parseInt(this.state.id, 10);
    });
    if (!rsvp) {
      this.invalidSearch();
    }
    this.setState({ rsvp });
  }
  invalidSearch() {
    toast.error("RSVP not found", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "red lighten-2"
    });
  }
  render() {
    const rsvp = this.state.rsvp;
    if (this.state.rsvp) {
      return (
        <div className="container col s6">
          <ul className="collapsible">
            <div className="collapsible-header flow-text">
              <i className="medium material-icons ">
                {this.numberOfGuests(rsvp.numberOfGuests)}
              </i>
              {rsvp.first_name} {rsvp.last_name}
              <span className="badge">{rsvp.date}</span>
              <span className="badge">{rsvp.time}</span>
            </div>
            <Card content={rsvp} editServer={false} />
          </ul>
        </div>
      );
    } else {
      return (
        <div className="section container">
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />
          <div className="row">
            <div class="input-field col s8 offset-s2">
              <input
                placeholder="RSVP ID"
                onChange={e => this.setState({ id: e.target.value })}
              />
            </div>
            <div className="col s12">
              <button
                className="red lighten-2 btn white-text col s8 offset-s2"
                onClick={() => this.findReservation()}
              >
                Find my Reservation
                <i className="material-icons right"> search</i>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { rsvps: state.rsvp.rsvps };
};
export default connect(
  mapStateToProps,
  null
)(RSVPdetails);
