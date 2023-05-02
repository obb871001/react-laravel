const NoticeReducers = (
  state = { content: "", type: "", timer: 0, show: false },
  action
) => {
  switch (action.type) {
    case "notice":
      return action.payload;
    case "clearNotice":
      return { content: "", type: "", timer: 0, show: false };
    default:
      return state;
  }
};
export default NoticeReducers;
