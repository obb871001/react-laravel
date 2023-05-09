const DetailPageReducers = (state = false, action) => {
  switch (action.type) {
    case "goToDetailPage":
      return true;
    case "goOutDetailPage":
      return false;
    default:
      return state;
  }
};
export default DetailPageReducers;
