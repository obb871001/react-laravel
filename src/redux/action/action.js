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
export const goToDetailPage = () => {
  return {
    type: "goToDetailPage",
  };
};
export const goOutDetailPage = () => {
  return {
    type: "goOutDetailPage",
  };
};
export const openMenu = () => {
  return {
    type: "openMenu",
  };
};
export const CloseMenu = () => {
  return {
    type: "CloseMenu",
  };
};
export const selectMenu = (menu) => {
  return {
    type: "selectMenu",
    payload: menu,
  };
};
