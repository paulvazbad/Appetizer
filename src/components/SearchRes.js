import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import RestaurantList from "./RestaurantList.js";

class SearchRes extends React.Component {
  state = {
    possibleRestaurants: [],
    selection: null,
    searchField: null
  };
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
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.setState({
      possibleRestaurants: [e.target.value]
    });
  };
  render() {
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
        <div className="row container center">
          <h5 className="grey-text text-darken-2 center">
            Create Reservation: Find my Restaurant
          </h5>
        </div>
        <div className="row">
          <div class="input-field col s8 offset-s2">
            <input type="text" id="searchField" onChange={this.handleChange} />
            <label htmlFor="searchField">Search for Restaurants</label>
          </div>
          <div class="col s2">
            <i className="medium material-icons left"> search</i>
          </div>
        </div>
        <div className="row center">
          <div className="col s8 offset-s2">
            {this.state.possibleRestaurants && (
              <RestaurantList restaurants={this.state.possibleRestaurants} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { possibleRestaurants: state.rsvp.possibleRestaurants };
};
/*const mapDispatchToProps = (dispatch) =>{
    return({searchRestaurant: (name) => dispatch(searchRestaurant(name))})
}
*/
export default SearchRes;
