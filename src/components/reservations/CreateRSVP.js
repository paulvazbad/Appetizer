import React from "react";
import { addRSVP } from "../../actions/index";
import { connect } from "react-redux";

class CreateRSVP extends React.Component {
  state = {
    first_name: null,
    last_name: null,
    email: false,
    date: null,
    numberOfGuests: 1,
    availableSpots: 5,
    reminder: false,
    time: null,
    buttonStatus: "red lighten-2 btn white-text col s12 disabled",
  };
  handleChange = (id,e) => {
    this.setState({
      [id]: e.target.value
    });
    const nexState = { ...this.state, [e.target.id]: e.target.value };
 
    if (this.checkAttributes(nexState)) {
      this.setState({
        buttonStatus: "red lighten-2 btn white-text col s12",
      });
    }
  };
  checkAttributes = nexState => {
    for (var Att in nexState) {
      if (nexState[Att] === null) {
        return false;
      }
    }
    return true;
  };
  handleSubmit = e => {
    this.props.addRSVP({ ...this.state, id: Math.floor(Math.random() * 1000), restaurant_id:this.props.match.params.restaurant_id });
    //redirect to '/:rsvp_id
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container center">
      <h5 className="grey-text text-darken-2">Create Reservation</h5>
        <div className="card-panel">
          <div className="row ">
            <form className="col s12 m12" onSubmit={this.handleSubmit}>
              <div className="row ">
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="first_name"
                    placeholder="First Name"
                    type="text"
                    className="validate"
                    onChange={e => this.handleChange("first_name", e)}
                  />
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="last_name"
                    placeholder="Last Name"
                    type="text"
                    className="validate"
                    onChange={e => this.handleChange("last_name", e)}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    placeholder="Email"
                    onChange={e => this.handleChange("email", e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <i className="material-icons prefix">date_range</i>
                  <input
                    type="date"
                    id="date"
                    className="datepicker"
                    onChange={e => this.handleChange("date", e)}
                  />
                  <label htmlFor="date">Date</label>
                </div>
                <div className="col s6">
                  <p class="range-field">
                    <i className="material-icons prefix">people</i>
                    <input
                      type="range"
                      id="range"
                      min="0"
                      value={this.state.numberOfGuests}
                      max={this.state.availableSpots}
                      onChange={e => this.handleChange("numberOfGuests", e)}
                    />
                    <label htmlFor="range">
                      Guests: {this.state.numberOfGuests}
                    </label>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <i className="material-icons prefix">access_time</i>
                  <input
                    type="time"
                    id="time"
                    className="datepicker"
                    onChange={e => this.handleChange("time", e)}
                  />
                  <label htmlFor="time">Time</label>
                </div>
                <div className="col s6">
                  <p>Email reminder 1hr before?</p>
                  <div className="switch">
                    <label>
                      No
                      <input
                        type="checkbox"
                        id="reminder"
                        onChange={e => this.handleChange("reminder", e)}
                      />
                      <span className="lever" />
                      Yes
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button className={this.state.buttonStatus} type="button" onClick={this.handleSubmit}>
                    Submit Reservation
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { addRSVP: payload => dispatch(addRSVP(payload)) };
};
const mapStateToProps = state => {
  return { state:state.rsvp.rsvps };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRSVP);
