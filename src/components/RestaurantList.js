import React from "react";
import { connect } from "react-redux";
import { selectRestaurant } from "../actions/index.js";
class RestaurantList extends React.Component {
  renderList = () =>
    this.props.restaurants.map(elem => {
      elem = elem.trim();
      if (elem.length > 0) {
        //pass id instead of whole element to dispatch
        return (
          <li
            className="collection-item"
            onClick={() => this.props.selectRestaurant(elem)}
          >
            {elem}
          </li>
        );
      }
    });
  render() {
    return <ul className="collection">{this.renderList()}</ul>;
  }
}
const mapDispatchToProps = dispatch => ({
  selectRestaurant: id => dispatch(selectRestaurant(id))
});
export default connect(
  null,
  mapDispatchToProps
)(RestaurantList);
