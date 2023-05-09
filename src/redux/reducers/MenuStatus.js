const MenuSelectReducers = (state = "", action) => {
  switch (action.type) {
    case "selectMenu":
      return action.payload;
    default:
      return state;
  }
};
export default MenuSelectReducers;
