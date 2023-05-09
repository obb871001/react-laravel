const MenuReducers = (state = false, action) => {
  switch (action.type) {
    case "openMenu":
      return true;
    case "CloseMenu":
      return false;
    default:
      return state;
  }
};
export default MenuReducers;
