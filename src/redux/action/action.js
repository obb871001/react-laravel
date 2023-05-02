export const loading = () => {
  return {
    type: "loading",
  };
};
export const loadingDestroy = () => {
  return {
    type: "loadingDestroy",
  };
};
export const notice = (content, type, timer) => {
  return {
    type: "notice",
    payload: { content: content, type: type, timer: timer, show: true },
  };
};
export const clearNotice = () => {
  return {
    type: "clearNotice",
  };
};
