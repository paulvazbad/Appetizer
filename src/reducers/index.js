import authReducer from "./authReducer.js";
import rsvpReducer from "./rsvpReducer.js";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  rsvp: rsvpReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
