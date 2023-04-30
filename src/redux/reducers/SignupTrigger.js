const initialState = "";

const SignupTriggerReducers = (state = initialState, action) => {
  switch (action.type) {
    case "openSignup":
      return "signup";
    case "openSignin":
      return "signin";
    case "closeSign":
      return "";
    default:
      return state;
  }
};
export default SignupTriggerReducers;
