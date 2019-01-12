import React, { Component } from "react";
import { AUTCHECK_PATH } from "../../constants/paths.js";
import { connect } from "react-redux";
import { signIn } from "../../actions/index";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    buttonStatus: "red lighten-2 btn white-text col s12 disabled",
    changed: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    const nexState = { ...this.state, [e.target.id]: e.target.value };
    if (this.checkAttributes(nexState)) {
      this.setState({
        buttonStatus: "red lighten-2 btn white-text col s12"
      });
    }
  };
  checkAttributes = nexState => {
    for (var Att in nexState) {
      if (nexState[Att] === "") {
        return false;
      }
    }
    return true;
  };

  handleSubmit = e => {
    //redirect to '/:rsvp_id
    this.props.signIn(this.state);
    //this.props.history.push(AUTCHECK_PATH);
  };
  componentDidUpdate() {
    if (this.props.restaurant_id) {
      this.props.history.push(AUTCHECK_PATH);
    }
  }
  render() {
    //Search for the restaurant first

    return (
      <div className="container center">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-2">Sign In</h5>
          <div className="red-text center">
            {this.props.error && <p>{this.props.error}</p>}
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="row center">
            <div className="col s6 offset-s3">
              <button
                className={this.state.buttonStatus}
                type="button"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: cred => dispatch(signIn(cred))
});
const mapStateToProps = state => ({
  error: state.auth.LogInError,
  restaurant_id: state.auth.restaurant_id
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
