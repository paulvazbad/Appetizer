import {
  ADD_RSVP,
  SELECT_RSVP,
  SELECT_SERVER,
  SEARCH_RESTAURANT,
  SELECT_RESTAURANT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SUCCESFUL_QUERY
} from "../constants/types";

export const addRSVP = rsvp => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(rsvp.restaurant_id)
      .add({
        first_name: rsvp.first_name,
        last_name: rsvp.last_name,
        email: rsvp.email,
        date: rsvp.date,
        numberOfGuests: rsvp.numberOfGuests,
        reminder: rsvp.reminder,
        time: rsvp.time,
        server: null,
        restaurant_id: rsvp.restaurant_id
      })
      .then(() => {
        dispatch({ type: ADD_RSVP, payload: rsvp });
      });
    //make async call
    //dispatch the action
  };
};
export const getRSVPS = restaurant_id => {
  return (getState, dispatch, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .get({
        collection: restaurant_id
      })
      .then(res => dispatch({ type: SUCCESFUL_QUERY, payload: res }));
  };
};
export const setSelectedRSVP = id => {
  return { type: SELECT_RSVP, payload: id };
};

export const selectServer = payload => {
  return { type: SELECT_SERVER, payload: payload };
};

export const searchRestaurant = payload => {
  return (dispatch, getState) => {
    // search
    let searchResult = payload;
    dispatch({
      type: SEARCH_RESTAURANT,
      payload: searchResult
    });
  };
};

export const selectRestaurant = id => {
  return {
    type: SELECT_RESTAURANT,
    payload: id
  };
};

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      });
  };
};
