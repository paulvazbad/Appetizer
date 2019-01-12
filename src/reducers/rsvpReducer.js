import {
  ADD_RSVP,
  SELECT_RSVP,
  SELECT_SERVER,
  SELECT_RESTAURANT
} from "../constants/types";
const initialState = {
  servers: null,
  tables: null,
  rsvps: [],
  selectedRSVP: null,
  selectedRestaurant: null
};
const rsvpReducer = (state = initialState, action) => {
  if (action.type === ADD_RSVP) {
    //check this lol
    ("ADD_RSVP reducer");
    (action.payload);
    let newState = Object.assign({}, state, {
      rsvps: state.rsvps.concat(action.payload)
    });
    return newState;
  } else if (action.type === SELECT_RSVP) {
    let newState = {
      ...state,
      selectedRSVP: action.payload
    };
    return newState;
  } else if (action.type === SELECT_SERVER) {
    var rsvps = state.rsvps;
    for (var i = 0; i < rsvps.length; i++) {
      if (rsvps[i].id === action.payload.id) {
        rsvps[i].server = action.payload.server;
      }
    }
    let newState = {
      ...state,
      rsvps: rsvps
    };
    return newState;
  } else if (action.type === SELECT_RESTAURANT) {
    return {
      ...state,
      selectedRestaurant: action.payload
    };
  } else if (action.type === SELECT_RESTAURANT) {
    return {
      ...state
    };
  }
  return state;
};
export default rsvpReducer;
