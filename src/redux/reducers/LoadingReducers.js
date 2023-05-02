const LoadingReducers = (state = false, action) => {
  switch (action.type) {
    case "loading":
      return true;
    case "loadingDestroy":
      return false;
    default:
      return state;
  }
};
export default LoadingReducers;
