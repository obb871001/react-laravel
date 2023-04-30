import { combineReducers } from "redux";
import SignupTriggerReducers from "./SignupTrigger";

const AllReducers = combineReducers({
  isSignupTrigger: SignupTriggerReducers,
});

export default AllReducers;
